export const typeDefs = ["type CreateAdminResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Mutation {\n  CreateAdmin(password: String!): CreateAdminResponse!\n  LoginAdmin(password: String!): LoginAdminResponse!\n  LogoutAdmin: LogoutAdminResponse!\n}\n\ntype LoginAdminResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype LogoutAdminResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Me {\n  adminId: String\n}\n\ntype MeResponse {\n  ok: Boolean!\n  error: String\n  me: Me\n}\n\ntype Query {\n  Me: MeResponse!\n  hello: String\n}\n\ntype Admin {\n  username: String!\n  password: String!\n  businessName: String\n  businessNumber: String\n  leader: String\n  email: String\n  privacyNeed: String\n  address: String\n  telephone: String\n  fax: String\n  facebook: String\n  instagram: String\n  youtube: String\n  twitter: String\n  blog: String\n}\n"];
/* tslint:disable */

export interface Query {
  Me: MeResponse;
  hello: string | null;
}

export interface MeResponse {
  ok: boolean;
  error: string | null;
  me: Me | null;
}

export interface Me {
  adminId: string | null;
}

export interface Mutation {
  CreateAdmin: CreateAdminResponse;
  LoginAdmin: LoginAdminResponse;
  LogoutAdmin: LogoutAdminResponse;
}

export interface CreateAdminMutationArgs {
  password: string;
}

export interface LoginAdminMutationArgs {
  password: string;
}

export interface CreateAdminResponse {
  ok: boolean;
  error: string | null;
}

export interface LoginAdminResponse {
  ok: boolean;
  error: string | null;
}

export interface LogoutAdminResponse {
  ok: boolean;
  error: string | null;
}

export interface Admin {
  username: string;
  password: string;
  businessName: string | null;
  businessNumber: string | null;
  leader: string | null;
  email: string | null;
  privacyNeed: string | null;
  address: string | null;
  telephone: string | null;
  fax: string | null;
  facebook: string | null;
  instagram: string | null;
  youtube: string | null;
  twitter: string | null;
  blog: string | null;
}
