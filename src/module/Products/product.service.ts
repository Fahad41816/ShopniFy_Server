import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// create
const createProductIntoDb = async (Data: TProduct) => {
  const IsProDuctExits = await prisma.products.findFirst({
    where: {
      shopId: Data.shopId,
      title: Data.title,
    },
  });

  if (IsProDuctExits) {
    throw new Error("This Product is Allready Exists!");
  }

  const Result = await prisma.products.create({
    data: Data,
  });

  return Result;
};

// get
interface QueryOption {
  searchTerm?: string;
  category?: string;
  Availability?: string;
  minPrice?: number;
  maxPrice?: number;
  tags?: string[];
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  page?: number;
  limit?: number;
}

const getAllProductIntoDb = async (queryOption: QueryOption) => {
  console.log(queryOption?.page);

  const options = []; // Array to hold dynamic filters

  // 1. Search Term Filter (name, title, and tags)
  if (queryOption.searchTerm) {
    options.push({
      OR: [
        { name: { contains: queryOption.searchTerm, mode: "insensitive" } },
        { title: { contains: queryOption.searchTerm, mode: "insensitive" } },
        {
          tags: { has: queryOption.searchTerm }, // Check if tags array contains the search term
        },
      ],
    });
  }

  // 2. Category Filter
  if (queryOption.category) {
    options.push({
      Category: { name: queryOption.category },
    });
  }

  // 3. Status Filter
  if (queryOption.Availability) {
    options.push({
      Availability:
        queryOption.Availability == "In Stock" ? "IN_STOCK" : "OUT_OF_STOCK",
    });
  }

  // 4. Price Range Filter
  if (
    queryOption?.minPrice &&
    queryOption?.maxPrice &&
    queryOption.minPrice >= 0 &&
    queryOption.maxPrice > 0
  ) {
    options.push({
      price: {
        gte: Number(queryOption.minPrice),
        lte: Number(queryOption.maxPrice),
      },
    });
  }

  // 5. Tags Filtering
  if (queryOption.tags && Array.isArray(queryOption.tags)) {
    options.push({
      tags: { hasSome: queryOption.tags }, // Matches any tags in the array
    });
  }

  // Combine all filters
  const FilterOption = { AND: options };

  // 6. Sorting Logic
  const allowedSortFields = ["price", "title", "createdAt"];
  let orderByOption = {};
  if (queryOption.sortBy && allowedSortFields.includes(queryOption.sortBy)) {
    const sortField = queryOption.sortBy;
    const sortOrder = queryOption.sortOrder === "desc" ? "desc" : "asc";
    orderByOption = { [sortField]: sortOrder };
  }

  // 7. Pagination Logic
  const page = parseInt(String(queryOption.page)) || 1;
  const limit = parseInt(String(queryOption.limit)) || 10;
  const skip = (page - 1) * limit;

  console.dir(FilterOption, { depth: null });

  // Final Query
  const Result = await prisma.products.findMany({
    // @ts-ignore
    where: FilterOption,
    orderBy: orderByOption, // Apply sorting
    skip: skip, // Apply pagination (offset)
    take: limit, // Number of records to fetch
    include: {
      shops: true,
      Category: true,
    },
  });

  // Total count for pagination
  const totalCount = await prisma.products.count({
    // @ts-ignore
    where: FilterOption,
  });

  // Return result with meta data
  return {
    data: Result,
    meta: {
      totalCount,
      page,
      limit,
      totalPages: Math.ceil(totalCount / limit),
    },
  };
};

const getProductForHomePage = async () => {
  const Result = await prisma.products.findMany({
    include: {
      Category: true,
      shops: true,
    },
  });
 
  return Result;
};

// get single
const getSingleDataIntoDb = async (shopName: string, productName: string) => {
  const Result = await prisma.products.findFirst({
    where: {
      title: productName,
      shops: {
        name: shopName,
      },
    },
    include: {
      shops: true,
      Reviews: true,
      Category: true,
    },
  });

  return Result;
};

// update
const updateProductIntoDb = async (
  id: string,
  shopId: string,
  updateData: Partial<TProduct>
) => {
  console.log(id);
  console.log(shopId);
  console.log(updateData);
  const Result = await prisma.products.update({
    where: {
      shopId: shopId,
      id: id,
    },
    data: updateData,
  });

  return Result;
};

// delete
const DeleteProductIntoDb = async (id: string) => {
  const Result = await prisma.products.delete({
    where: {
      id: id,
    },
  });

  return Result;
};

export const productService = {
  createProductIntoDb,
  getAllProductIntoDb,
  updateProductIntoDb,
  DeleteProductIntoDb,
  getSingleDataIntoDb,
  getProductForHomePage,
};
