import { cookies } from "next/headers";
import { jwtVerify, SignJWT } from "jose";

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is missing in .env.local");
}

const secret = new TextEncoder().encode(JWT_SECRET);

export async function createAdminToken(adminId: string) {
  return new SignJWT({
    adminId,
    role: "admin",
  })
    .setProtectedHeader({
      alg: "HS256",
    })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);
}

export async function getAdminSession() {
  const cookieStore = await cookies();

  const token = cookieStore.get("admin_token")?.value;

  if (!token) {
    return null;
  }

  try {
    const { payload } = await jwtVerify(token, secret);

    if (
      payload.role !== "admin" ||
      typeof payload.adminId !== "string"
    ) {
      return null;
    }

    return {
      adminId: payload.adminId,
      role: "admin",
    };
  } catch {
    return null;
  }
}

export async function requireAdmin() {
  const session = await getAdminSession();

  if (!session) {
    throw new Error("UNAUTHORIZED");
  }

  return session;
}