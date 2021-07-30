export const typeDefs = ["type CreateAdminResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Mutation {\n  CreateAdmin(password: String!): CreateAdminResponse!\n  LoginAdmin(password: String!): LoginAdminResponse!\n  LogoutAdmin: LogoutAdminResponse!\n  AddAsk(native: String!, name: String!, phone: String!, email: String!, reserveDate: String!, reserveTime: String!, num: Int!, body: String!): AddAskResponse!\n  RemoveAsk(id: ID!): RemoveAskResponse!\n  AddBanquet(title: String!, startTime: String!, endTime: String!, num: Int!, eventDate: String!): AddBanquetResponse!\n  RemoveBanquet(id: ID!): RemoveBanquetResponse!\n  UpdateBanquet(id: ID!, title: String, startTime: String, endTime: String, num: String, eventDate: String): UpdateBanquetResponse!\n  AddWeddingEvent(title: String!, body: String!, info: String, thumbnail: String): AddWeddingEventResponse!\n  RemoveWeddingEvent(id: ID!): RemoveWeddingEventResponse!\n  UpdateWeddingEvent(id: ID!, title: String, body: String, info: String, thumbnail: String): UpdateWeddingEventResponse!\n  AddReserve(husbandName: String!, husbandNative: String!, husbandPhone: String!, husbandEmail: String, brideName: String!, brideNative: String!, bridePhone: String!, brideEmail: String, firstWeddingDate: String!, firstWeddingTime: String!, secondWeddingDate: String, secondWeddingTime: String, etcAsk: String): AddReserveResponse!\n  CancelReserve(id: ID!): CancelReserveResponse!\n  ConfirmReserve(id: ID!, confirmDate: String!, confirmTime: String!): ConfirmReserveResponse!\n  RemoveReserve(id: ID!): RemoveReserveResponse!\n  AddSurvey(belong: String!, purpose: [String]!, servicePoint: Int!, mealsPoint: Int!, facility: Int!, reuse: Int!, etc: String!): AddSurveyResponse!\n  RemoveSurvey(id: ID!): RemoveSurveyResponse!\n  AddTip(title: String!, body: String!): AddTipResponse!\n  RemoveTip(id: ID!): RemoveTipResponse!\n  UpdateTip(id: ID!, title: String, body: String): UpdateTipResponse!\n}\n\ntype LoginAdminResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype LogoutAdminResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Me {\n  adminId: String\n}\n\ntype MeResponse {\n  ok: Boolean!\n  error: String\n  me: Me\n}\n\ntype Query {\n  Me: MeResponse!\n  ListAsks(page: Int, name: String): ListAsksResponse!\n  ReadAsk(id: ID!): ReadAskResponse!\n  ListBanquet(date: String!): ListBanquetResponse!\n  ReadBanquet(id: ID!): ReadBanquetResponse!\n  ListWeddingEvents(cursor: ID, title: String, body: String): ListWeddingEventsResponse!\n  ReadWeddingEvent(id: ID!): ReadWeddingEventResponse!\n  ListReserves(page: Int, confirm: Boolean, name: String, phone: String, email: String): ListReservesResponse!\n  ReadReserve(id: ID!): ReadReserveResponse!\n  ListSurvey(page: Int): ListSurveyResponse!\n  ReadSurvey(id: ID!): ReadSurveyResponse!\n  ListTips(page: Int, title: String): ListTipsResponse!\n  ReadTip(id: ID!): ReadTipResponse!\n}\n\ntype AddAskResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype ListAsksResponse {\n  ok: Boolean!\n  error: String\n  asks: [Ask]\n  lastPage: Int!\n}\n\ntype ReadAskResponse {\n  ok: Boolean!\n  error: String\n  ask: Ask\n}\n\ntype RemoveAskResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype AddBanquetResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype ListBanquetResponse {\n  ok: Boolean!\n  error: String\n  banquets: [Banquet]\n}\n\ntype ReadBanquetResponse {\n  ok: Boolean!\n  error: String\n  banquet: Banquet\n}\n\ntype RemoveBanquetResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype UpdateBanquetResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype AddWeddingEventResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype ListWeddingEventsResponse {\n  ok: Boolean!\n  error: String\n  weddingEvents: [WeddingEvent]\n}\n\ntype ReadWeddingEventResponse {\n  ok: Boolean!\n  error: String\n  weddingEvent: WeddingEvent\n}\n\ntype RemoveWeddingEventResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype UpdateWeddingEventResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype AddReserveResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype CancelReserveResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype ConfirmReserveResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype ListReservesResponse {\n  ok: Boolean!\n  error: String\n  reserves: [Reserve]\n  lastPage: Int!\n}\n\ntype ReadReserveResponse {\n  ok: Boolean!\n  error: String\n  reserve: Reserve\n}\n\ntype RemoveReserveResponse {\n  ok: Boolean!\n  error: String\n}\n\nscalar Date\n\ntype Admin {\n  id: ID!\n  username: String!\n  password: String!\n  businessName: String\n  businessNumber: String\n  leader: String\n  email: String\n  privacyNeed: String\n  address: String\n  telephone: String\n  fax: String\n  facebook: String\n  instagram: String\n  youtube: String\n  twitter: String\n  blog: String\n}\n\ntype Seo {\n  id: ID!\n  title: String\n  description: String\n  keywords: String\n  headTag: String\n  bodyTag: String\n}\n\ntype Tip {\n  id: ID!\n  title: String!\n  body: String!\n  created_at: Date!\n  updated_at: Date\n}\n\ntype WeddingEvent {\n  id: ID!\n  title: String!\n  body: String!\n  info: String\n  thumbnail: String\n  created_at: Date!\n  updated_at: Date\n}\n\ntype Reserve {\n  id: ID!\n  husbandName: String!\n  husbandNative: String!\n  husbandPhone: String!\n  husbandEmail: String\n  brideName: String!\n  brideNative: String!\n  bridePhone: String!\n  brideEmail: String\n  firstWeddingDate: String!\n  firstWeddingTime: String!\n  secondWeddingDate: String\n  secondWeddingTime: String\n  etcAsk: String\n  isConfirm: Boolean!\n  confirmDate: String\n  confirmTime: String\n  created_at: Date!\n}\n\ntype Banquet {\n  id: ID!\n  title: String!\n  startTime: String!\n  endTime: String!\n  num: Int!\n  eventDate: String!\n  created_at: Date!\n}\n\ntype Ask {\n  id: ID!\n  native: String!\n  name: String!\n  phone: String!\n  email: String!\n  reserveDate: String!\n  reserveTime: String!\n  num: Int!\n  body: String!\n  created_at: Date!\n}\n\ntype Survey {\n  id: ID!\n  belong: String!\n  purpose: [String]!\n  servicePoint: Int!\n  mealsPoint: Int!\n  facility: Int!\n  reuse: Int!\n  etc: String!\n  created_at: Date!\n}\n\ntype AddSurveyResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype ListSurveyResponse {\n  ok: Boolean!\n  error: String\n  survey: [Survey]\n  lastPage: Int!\n}\n\ntype ReadSurveyResponse {\n  ok: Boolean!\n  error: String\n  survey: Survey\n}\n\ntype RemoveSurveyResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype AddTipResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype ListTipsResponse {\n  ok: Boolean!\n  error: String\n  tips: [Tip]\n  lastPage: Int!\n}\n\ntype ReadTipResponse {\n  ok: Boolean!\n  error: String\n  tip: Tip\n}\n\ntype RemoveTipResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype UpdateTipResponse {\n  ok: Boolean!\n  error: String\n}\n"];
/* tslint:disable */

export interface Query {
  Me: MeResponse;
  ListAsks: ListAsksResponse;
  ReadAsk: ReadAskResponse;
  ListBanquet: ListBanquetResponse;
  ReadBanquet: ReadBanquetResponse;
  ListWeddingEvents: ListWeddingEventsResponse;
  ReadWeddingEvent: ReadWeddingEventResponse;
  ListReserves: ListReservesResponse;
  ReadReserve: ReadReserveResponse;
  ListSurvey: ListSurveyResponse;
  ReadSurvey: ReadSurveyResponse;
  ListTips: ListTipsResponse;
  ReadTip: ReadTipResponse;
}

export interface ListAsksQueryArgs {
  page: number | null;
  name: string | null;
}

export interface ReadAskQueryArgs {
  id: string;
}

export interface ListBanquetQueryArgs {
  date: string;
}

export interface ReadBanquetQueryArgs {
  id: string;
}

export interface ListWeddingEventsQueryArgs {
  cursor: string | null;
  title: string | null;
  body: string | null;
}

export interface ReadWeddingEventQueryArgs {
  id: string;
}

export interface ListReservesQueryArgs {
  page: number | null;
  confirm: boolean | null;
  name: string | null;
  phone: string | null;
  email: string | null;
}

export interface ReadReserveQueryArgs {
  id: string;
}

export interface ListSurveyQueryArgs {
  page: number | null;
}

export interface ReadSurveyQueryArgs {
  id: string;
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

export interface ListAsksResponse {
  ok: boolean;
  error: string | null;
  asks: Array<Ask> | null;
  lastPage: number;
}

export interface Ask {
  id: string;
  native: string;
  name: string;
  phone: string;
  email: string;
  reserveDate: string;
  reserveTime: string;
  num: number;
  body: string;
  created_at: Date;
}

export type Date = any;

export interface ReadAskResponse {
  ok: boolean;
  error: string | null;
  ask: Ask | null;
}

export interface ListBanquetResponse {
  ok: boolean;
  error: string | null;
  banquets: Array<Banquet> | null;
}

export interface Banquet {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  num: number;
  eventDate: string;
  created_at: Date;
}

export interface ReadBanquetResponse {
  ok: boolean;
  error: string | null;
  banquet: Banquet | null;
}

export interface ListWeddingEventsResponse {
  ok: boolean;
  error: string | null;
  weddingEvents: Array<WeddingEvent> | null;
}

export interface WeddingEvent {
  id: string;
  title: string;
  body: string;
  info: string | null;
  thumbnail: string | null;
  created_at: Date;
  updated_at: Date | null;
}

export interface ReadWeddingEventResponse {
  ok: boolean;
  error: string | null;
  weddingEvent: WeddingEvent | null;
}

export interface ListReservesResponse {
  ok: boolean;
  error: string | null;
  reserves: Array<Reserve> | null;
  lastPage: number;
}

export interface Reserve {
  id: string;
  husbandName: string;
  husbandNative: string;
  husbandPhone: string;
  husbandEmail: string | null;
  brideName: string;
  brideNative: string;
  bridePhone: string;
  brideEmail: string | null;
  firstWeddingDate: string;
  firstWeddingTime: string;
  secondWeddingDate: string | null;
  secondWeddingTime: string | null;
  etcAsk: string | null;
  isConfirm: boolean;
  confirmDate: string | null;
  confirmTime: string | null;
  created_at: Date;
}

export interface ReadReserveResponse {
  ok: boolean;
  error: string | null;
  reserve: Reserve | null;
}

export interface ListSurveyResponse {
  ok: boolean;
  error: string | null;
  survey: Array<Survey> | null;
  lastPage: number;
}

export interface Survey {
  id: string;
  belong: string;
  purpose: Array<string>;
  servicePoint: number;
  mealsPoint: number;
  facility: number;
  reuse: number;
  etc: string;
  created_at: Date;
}

export interface ReadSurveyResponse {
  ok: boolean;
  error: string | null;
  survey: Survey | null;
}

export interface ListTipsResponse {
  ok: boolean;
  error: string | null;
  tips: Array<Tip> | null;
  lastPage: number;
}

export interface Tip {
  id: string;
  title: string;
  body: string;
  created_at: Date;
  updated_at: Date | null;
}

export interface ReadTipResponse {
  ok: boolean;
  error: string | null;
  tip: Tip | null;
}

export interface Mutation {
  CreateAdmin: CreateAdminResponse;
  LoginAdmin: LoginAdminResponse;
  LogoutAdmin: LogoutAdminResponse;
  AddAsk: AddAskResponse;
  RemoveAsk: RemoveAskResponse;
  AddBanquet: AddBanquetResponse;
  RemoveBanquet: RemoveBanquetResponse;
  UpdateBanquet: UpdateBanquetResponse;
  AddWeddingEvent: AddWeddingEventResponse;
  RemoveWeddingEvent: RemoveWeddingEventResponse;
  UpdateWeddingEvent: UpdateWeddingEventResponse;
  AddReserve: AddReserveResponse;
  CancelReserve: CancelReserveResponse;
  ConfirmReserve: ConfirmReserveResponse;
  RemoveReserve: RemoveReserveResponse;
  AddSurvey: AddSurveyResponse;
  RemoveSurvey: RemoveSurveyResponse;
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

export interface AddAskMutationArgs {
  native: string;
  name: string;
  phone: string;
  email: string;
  reserveDate: string;
  reserveTime: string;
  num: number;
  body: string;
}

export interface RemoveAskMutationArgs {
  id: string;
}

export interface AddBanquetMutationArgs {
  title: string;
  startTime: string;
  endTime: string;
  num: number;
  eventDate: string;
}

export interface RemoveBanquetMutationArgs {
  id: string;
}

export interface UpdateBanquetMutationArgs {
  id: string;
  title: string | null;
  startTime: string | null;
  endTime: string | null;
  num: string | null;
  eventDate: string | null;
}

export interface AddWeddingEventMutationArgs {
  title: string;
  body: string;
  info: string | null;
  thumbnail: string | null;
}

export interface RemoveWeddingEventMutationArgs {
  id: string;
}

export interface UpdateWeddingEventMutationArgs {
  id: string;
  title: string | null;
  body: string | null;
  info: string | null;
  thumbnail: string | null;
}

export interface AddReserveMutationArgs {
  husbandName: string;
  husbandNative: string;
  husbandPhone: string;
  husbandEmail: string | null;
  brideName: string;
  brideNative: string;
  bridePhone: string;
  brideEmail: string | null;
  firstWeddingDate: string;
  firstWeddingTime: string;
  secondWeddingDate: string | null;
  secondWeddingTime: string | null;
  etcAsk: string | null;
}

export interface CancelReserveMutationArgs {
  id: string;
}

export interface ConfirmReserveMutationArgs {
  id: string;
  confirmDate: string;
  confirmTime: string;
}

export interface RemoveReserveMutationArgs {
  id: string;
}

export interface AddSurveyMutationArgs {
  belong: string;
  purpose: Array<string>;
  servicePoint: number;
  mealsPoint: number;
  facility: number;
  reuse: number;
  etc: string;
}

export interface RemoveSurveyMutationArgs {
  id: string;
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
  token: string | null;
}

export interface LogoutAdminResponse {
  ok: boolean;
  error: string | null;
}

export interface AddAskResponse {
  ok: boolean;
  error: string | null;
}

export interface RemoveAskResponse {
  ok: boolean;
  error: string | null;
}

export interface AddBanquetResponse {
  ok: boolean;
  error: string | null;
}

export interface RemoveBanquetResponse {
  ok: boolean;
  error: string | null;
}

export interface UpdateBanquetResponse {
  ok: boolean;
  error: string | null;
}

export interface AddWeddingEventResponse {
  ok: boolean;
  error: string | null;
}

export interface RemoveWeddingEventResponse {
  ok: boolean;
  error: string | null;
}

export interface UpdateWeddingEventResponse {
  ok: boolean;
  error: string | null;
}

export interface AddReserveResponse {
  ok: boolean;
  error: string | null;
}

export interface CancelReserveResponse {
  ok: boolean;
  error: string | null;
}

export interface ConfirmReserveResponse {
  ok: boolean;
  error: string | null;
}

export interface RemoveReserveResponse {
  ok: boolean;
  error: string | null;
}

export interface AddSurveyResponse {
  ok: boolean;
  error: string | null;
}

export interface RemoveSurveyResponse {
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
  id: string;
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
  id: string;
  title: string | null;
  description: string | null;
  keywords: string | null;
  headTag: string | null;
  bodyTag: string | null;
}
