export const typeDefs = ["type CreateAdminResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Mutation {\n  CreateAdmin(password: String!): CreateAdminResponse!\n  LoginAdmin(password: String!): LoginAdminResponse!\n  LogoutAdmin: LogoutAdminResponse!\n  AddTip(title: String!, body: String!): AddTipResponse!\n  RemoveTip(id: ID!): RemoveTipResponse!\n  UpdateTip(id: ID!, title: String, body: String): UpdateTipResponse!\n}\n\ntype LoginAdminResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype LogoutAdminResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Me {\n  adminId: String\n}\n\ntype MeResponse {\n  ok: Boolean!\n  error: String\n  me: Me\n}\n\ntype Query {\n  Me: MeResponse!\n  ListTips(page: Int, title: String): ListTipsResponse!\n  ReadTip(id: ID!): ReadTipResponse!\n}\n\nscalar Date\n\ntype Admin {\n  username: String!\n  password: String!\n  businessName: String\n  businessNumber: String\n  leader: String\n  email: String\n  privacyNeed: String\n  address: String\n  telephone: String\n  fax: String\n  facebook: String\n  instagram: String\n  youtube: String\n  twitter: String\n  blog: String\n}\n\ntype Seo {\n  title: String\n  description: String\n  keywords: String\n  headTag: String\n  bodyTag: String\n}\n\ntype Tip {\n  title: String!\n  body: String!\n  created_at: Date!\n  updated_at: Date\n}\n\ntype WeddingEvent {\n  title: String!\n  body: String!\n  info: String!\n  thumbnail: String\n  created_at: Date!\n  updated_at: Date\n}\n\ntype AddTipResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype ListTipsResponse {\n  ok: Boolean!\n  error: String\n  tips: [Tip]\n  lastPage: Int!\n}\n\ntype ReadTipResponse {\n  ok: Boolean!\n  error: String\n  tip: Tip\n}\n\ntype RemoveTipResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype UpdateTipResponse {\n  ok: Boolean!\n  error: String\n}\n"];
/* tslint:disable */

export interface Query {
  Me: MeResponse;
  ListTips: ListTipsResponse;
  ReadTip: ReadTipResponse;
}

export interface ListTipsQueryArgs {
  page: number | null;
  title: string | null;
}

export interface ReadTipQueryArgs {
  id: string;
}

export interface MeResponse {
  ok: boolean;
  error: string | null;
  me: Me | null;
}

export interface Me {
  adminId: string | null;
}

export interface ListTipsResponse {
  ok: boolean;
  error: string | null;
  tips: Array<Tip> | null;
  lastPage: number;
}

export interface Tip {
  title: string;
  body: string;
  created_at: Date;
  updated_at: Date | null;
}

export type Date = any;

export interface ReadTipResponse {
  ok: boolean;
  error: string | null;
  tip: Tip | null;
}

export interface Mutation {
  CreateAdmin: CreateAdminResponse;
  LoginAdmin: LoginAdminResponse;
  LogoutAdmin: LogoutAdminResponse;
  AddTip: AddTipResponse;
  RemoveTip: RemoveTipResponse;
  UpdateTip: UpdateTipResponse;
}

export interface CreateAdminMutationArgs {
  password: string;
}

export interface LoginAdminMutationArgs {
  password: string;
}

export interface AddTipMutationArgs {
  title: string;
  body: string;
}

export interface RemoveTipMutationArgs {
  id: string;
}

export interface UpdateTipMutationArgs {
  id: string;
  title: string | null;
  body: string | null;
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

export interface AddTipResponse {
  ok: boolean;
  error: string | null;
}

export interface RemoveTipResponse {
  ok: boolean;
  error: string | null;
}

export interface UpdateTipResponse {
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

export interface Seo {
  title: string | null;
  description: string | null;
  keywords: string | null;
  headTag: string | null;
  bodyTag: string | null;
}

export interface WeddingEvent {
  title: string;
  body: string;
  info: string;
  thumbnail: string | null;
  created_at: Date;
  updated_at: Date | null;
}
