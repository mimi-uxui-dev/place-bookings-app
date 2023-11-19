import { NextRequest } from "next/server";
import { createEdgeRouter } from "next-connect";
import { allRooms } from "@/backend/controllers/roomControllers";
import dbConnect from "@/backend/config/dbConnect";

interface RequestContext {
  params: {
    id: string;
  };
}

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.get(allRooms);

// ctx = context
export async function GET(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx);
}
