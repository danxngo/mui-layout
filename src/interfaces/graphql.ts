export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  date: { input: any; output: any; }
  numeric: { input: any; output: any; }
  timestamp: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "contracts" */
export type Contracts = {
  end_date?: Maybe<Scalars['date']['output']>;
  id: Scalars['uuid']['output'];
  start_date?: Maybe<Scalars['date']['output']>;
  tenant_id?: Maybe<Scalars['uuid']['output']>;
  terms_and_conditions?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "contracts" */
export type Contracts_Aggregate = {
  aggregate?: Maybe<Contracts_Aggregate_Fields>;
  nodes: Array<Contracts>;
};

/** aggregate fields of "contracts" */
export type Contracts_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Contracts_Max_Fields>;
  min?: Maybe<Contracts_Min_Fields>;
};


/** aggregate fields of "contracts" */
export type Contracts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Contracts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "contracts". All fields are combined with a logical 'AND'. */
export type Contracts_Bool_Exp = {
  _and?: InputMaybe<Array<Contracts_Bool_Exp>>;
  _not?: InputMaybe<Contracts_Bool_Exp>;
  _or?: InputMaybe<Array<Contracts_Bool_Exp>>;
  end_date?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  start_date?: InputMaybe<Date_Comparison_Exp>;
  tenant_id?: InputMaybe<Uuid_Comparison_Exp>;
  terms_and_conditions?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "contracts" */
export type Contracts_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'contracts_pkey';

/** input type for inserting data into table "contracts" */
export type Contracts_Insert_Input = {
  end_date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  start_date?: InputMaybe<Scalars['date']['input']>;
  tenant_id?: InputMaybe<Scalars['uuid']['input']>;
  terms_and_conditions?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Contracts_Max_Fields = {
  end_date?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  start_date?: Maybe<Scalars['date']['output']>;
  tenant_id?: Maybe<Scalars['uuid']['output']>;
  terms_and_conditions?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Contracts_Min_Fields = {
  end_date?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  start_date?: Maybe<Scalars['date']['output']>;
  tenant_id?: Maybe<Scalars['uuid']['output']>;
  terms_and_conditions?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "contracts" */
export type Contracts_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Contracts>;
};

/** on_conflict condition type for table "contracts" */
export type Contracts_On_Conflict = {
  constraint: Contracts_Constraint;
  update_columns?: Array<Contracts_Update_Column>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};

/** Ordering options when selecting data from "contracts". */
export type Contracts_Order_By = {
  end_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  terms_and_conditions?: InputMaybe<Order_By>;
};

/** primary key columns input for table: contracts */
export type Contracts_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "contracts" */
export type Contracts_Select_Column =
  /** column name */
  | 'end_date'
  /** column name */
  | 'id'
  /** column name */
  | 'start_date'
  /** column name */
  | 'tenant_id'
  /** column name */
  | 'terms_and_conditions';

/** input type for updating data in table "contracts" */
export type Contracts_Set_Input = {
  end_date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  start_date?: InputMaybe<Scalars['date']['input']>;
  tenant_id?: InputMaybe<Scalars['uuid']['input']>;
  terms_and_conditions?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "contracts" */
export type Contracts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Contracts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Contracts_Stream_Cursor_Value_Input = {
  end_date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  start_date?: InputMaybe<Scalars['date']['input']>;
  tenant_id?: InputMaybe<Scalars['uuid']['input']>;
  terms_and_conditions?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "contracts" */
export type Contracts_Update_Column =
  /** column name */
  | 'end_date'
  /** column name */
  | 'id'
  /** column name */
  | 'start_date'
  /** column name */
  | 'tenant_id'
  /** column name */
  | 'terms_and_conditions';

export type Contracts_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Contracts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Contracts_Bool_Exp;
};

/** ordering argument of a cursor */
export type Cursor_Ordering =
  /** ascending ordering of the cursor */
  | 'ASC'
  /** descending ordering of the cursor */
  | 'DESC';

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** columns and relationships of "electricity" */
export type Electricity = {
  checked?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['uuid']['output'];
  room_id?: Maybe<Scalars['uuid']['output']>;
  token: Scalars['String']['output'];
};

/** aggregated selection of "electricity" */
export type Electricity_Aggregate = {
  aggregate?: Maybe<Electricity_Aggregate_Fields>;
  nodes: Array<Electricity>;
};

/** aggregate fields of "electricity" */
export type Electricity_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Electricity_Max_Fields>;
  min?: Maybe<Electricity_Min_Fields>;
};


/** aggregate fields of "electricity" */
export type Electricity_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Electricity_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "electricity". All fields are combined with a logical 'AND'. */
export type Electricity_Bool_Exp = {
  _and?: InputMaybe<Array<Electricity_Bool_Exp>>;
  _not?: InputMaybe<Electricity_Bool_Exp>;
  _or?: InputMaybe<Array<Electricity_Bool_Exp>>;
  checked?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  room_id?: InputMaybe<Uuid_Comparison_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "electricity" */
export type Electricity_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'electricity_pkey';

/** input type for inserting data into table "electricity" */
export type Electricity_Insert_Input = {
  checked?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  room_id?: InputMaybe<Scalars['uuid']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Electricity_Max_Fields = {
  id?: Maybe<Scalars['uuid']['output']>;
  room_id?: Maybe<Scalars['uuid']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Electricity_Min_Fields = {
  id?: Maybe<Scalars['uuid']['output']>;
  room_id?: Maybe<Scalars['uuid']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "electricity" */
export type Electricity_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Electricity>;
};

/** on_conflict condition type for table "electricity" */
export type Electricity_On_Conflict = {
  constraint: Electricity_Constraint;
  update_columns?: Array<Electricity_Update_Column>;
  where?: InputMaybe<Electricity_Bool_Exp>;
};

/** Ordering options when selecting data from "electricity". */
export type Electricity_Order_By = {
  checked?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
};

/** primary key columns input for table: electricity */
export type Electricity_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "electricity" */
export type Electricity_Select_Column =
  /** column name */
  | 'checked'
  /** column name */
  | 'id'
  /** column name */
  | 'room_id'
  /** column name */
  | 'token';

/** input type for updating data in table "electricity" */
export type Electricity_Set_Input = {
  checked?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  room_id?: InputMaybe<Scalars['uuid']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "electricity" */
export type Electricity_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Electricity_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Electricity_Stream_Cursor_Value_Input = {
  checked?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  room_id?: InputMaybe<Scalars['uuid']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "electricity" */
export type Electricity_Update_Column =
  /** column name */
  | 'checked'
  /** column name */
  | 'id'
  /** column name */
  | 'room_id'
  /** column name */
  | 'token';

export type Electricity_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Electricity_Set_Input>;
  /** filter the rows which have to be updated */
  where: Electricity_Bool_Exp;
};

/** columns and relationships of "expenses" */
export type Expenses = {
  amount?: Maybe<Scalars['numeric']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  expense_date?: Maybe<Scalars['timestamp']['output']>;
  house_id?: Maybe<Scalars['uuid']['output']>;
  id: Scalars['uuid']['output'];
};

/** aggregated selection of "expenses" */
export type Expenses_Aggregate = {
  aggregate?: Maybe<Expenses_Aggregate_Fields>;
  nodes: Array<Expenses>;
};

/** aggregate fields of "expenses" */
export type Expenses_Aggregate_Fields = {
  avg?: Maybe<Expenses_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Expenses_Max_Fields>;
  min?: Maybe<Expenses_Min_Fields>;
  stddev?: Maybe<Expenses_Stddev_Fields>;
  stddev_pop?: Maybe<Expenses_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Expenses_Stddev_Samp_Fields>;
  sum?: Maybe<Expenses_Sum_Fields>;
  var_pop?: Maybe<Expenses_Var_Pop_Fields>;
  var_samp?: Maybe<Expenses_Var_Samp_Fields>;
  variance?: Maybe<Expenses_Variance_Fields>;
};


/** aggregate fields of "expenses" */
export type Expenses_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Expenses_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Expenses_Avg_Fields = {
  amount?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "expenses". All fields are combined with a logical 'AND'. */
export type Expenses_Bool_Exp = {
  _and?: InputMaybe<Array<Expenses_Bool_Exp>>;
  _not?: InputMaybe<Expenses_Bool_Exp>;
  _or?: InputMaybe<Array<Expenses_Bool_Exp>>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  expense_date?: InputMaybe<Timestamp_Comparison_Exp>;
  house_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "expenses" */
export type Expenses_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'expenses_pkey';

/** input type for incrementing numeric columns in table "expenses" */
export type Expenses_Inc_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "expenses" */
export type Expenses_Insert_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expense_date?: InputMaybe<Scalars['timestamp']['input']>;
  house_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Expenses_Max_Fields = {
  amount?: Maybe<Scalars['numeric']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  expense_date?: Maybe<Scalars['timestamp']['output']>;
  house_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Expenses_Min_Fields = {
  amount?: Maybe<Scalars['numeric']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  expense_date?: Maybe<Scalars['timestamp']['output']>;
  house_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "expenses" */
export type Expenses_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Expenses>;
};

/** on_conflict condition type for table "expenses" */
export type Expenses_On_Conflict = {
  constraint: Expenses_Constraint;
  update_columns?: Array<Expenses_Update_Column>;
  where?: InputMaybe<Expenses_Bool_Exp>;
};

/** Ordering options when selecting data from "expenses". */
export type Expenses_Order_By = {
  amount?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  expense_date?: InputMaybe<Order_By>;
  house_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: expenses */
export type Expenses_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "expenses" */
export type Expenses_Select_Column =
  /** column name */
  | 'amount'
  /** column name */
  | 'description'
  /** column name */
  | 'expense_date'
  /** column name */
  | 'house_id'
  /** column name */
  | 'id';

/** input type for updating data in table "expenses" */
export type Expenses_Set_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expense_date?: InputMaybe<Scalars['timestamp']['input']>;
  house_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Expenses_Stddev_Fields = {
  amount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Expenses_Stddev_Pop_Fields = {
  amount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Expenses_Stddev_Samp_Fields = {
  amount?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "expenses" */
export type Expenses_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Expenses_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Expenses_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expense_date?: InputMaybe<Scalars['timestamp']['input']>;
  house_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Expenses_Sum_Fields = {
  amount?: Maybe<Scalars['numeric']['output']>;
};

/** update columns of table "expenses" */
export type Expenses_Update_Column =
  /** column name */
  | 'amount'
  /** column name */
  | 'description'
  /** column name */
  | 'expense_date'
  /** column name */
  | 'house_id'
  /** column name */
  | 'id';

export type Expenses_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Expenses_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Expenses_Set_Input>;
  /** filter the rows which have to be updated */
  where: Expenses_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Expenses_Var_Pop_Fields = {
  amount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Expenses_Var_Samp_Fields = {
  amount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Expenses_Variance_Fields = {
  amount?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "houses" */
export type Houses = {
  address?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  landlord_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "houses" */
export type Houses_Aggregate = {
  aggregate?: Maybe<Houses_Aggregate_Fields>;
  nodes: Array<Houses>;
};

/** aggregate fields of "houses" */
export type Houses_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Houses_Max_Fields>;
  min?: Maybe<Houses_Min_Fields>;
};


/** aggregate fields of "houses" */
export type Houses_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Houses_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "houses". All fields are combined with a logical 'AND'. */
export type Houses_Bool_Exp = {
  _and?: InputMaybe<Array<Houses_Bool_Exp>>;
  _not?: InputMaybe<Houses_Bool_Exp>;
  _or?: InputMaybe<Array<Houses_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  landlord_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "houses" */
export type Houses_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'houses_pkey';

/** input type for inserting data into table "houses" */
export type Houses_Insert_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  landlord_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Houses_Max_Fields = {
  address?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  landlord_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Houses_Min_Fields = {
  address?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  landlord_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "houses" */
export type Houses_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Houses>;
};

/** on_conflict condition type for table "houses" */
export type Houses_On_Conflict = {
  constraint: Houses_Constraint;
  update_columns?: Array<Houses_Update_Column>;
  where?: InputMaybe<Houses_Bool_Exp>;
};

/** Ordering options when selecting data from "houses". */
export type Houses_Order_By = {
  address?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  landlord_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: houses */
export type Houses_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "houses" */
export type Houses_Select_Column =
  /** column name */
  | 'address'
  /** column name */
  | 'id'
  /** column name */
  | 'landlord_id';

/** input type for updating data in table "houses" */
export type Houses_Set_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  landlord_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "houses" */
export type Houses_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Houses_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Houses_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  landlord_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "houses" */
export type Houses_Update_Column =
  /** column name */
  | 'address'
  /** column name */
  | 'id'
  /** column name */
  | 'landlord_id';

export type Houses_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Houses_Set_Input>;
  /** filter the rows which have to be updated */
  where: Houses_Bool_Exp;
};

/** columns and relationships of "landlords" */
export type Landlords = {
  contact_number?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "landlords" */
export type Landlords_Aggregate = {
  aggregate?: Maybe<Landlords_Aggregate_Fields>;
  nodes: Array<Landlords>;
};

/** aggregate fields of "landlords" */
export type Landlords_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Landlords_Max_Fields>;
  min?: Maybe<Landlords_Min_Fields>;
};


/** aggregate fields of "landlords" */
export type Landlords_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Landlords_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "landlords". All fields are combined with a logical 'AND'. */
export type Landlords_Bool_Exp = {
  _and?: InputMaybe<Array<Landlords_Bool_Exp>>;
  _not?: InputMaybe<Landlords_Bool_Exp>;
  _or?: InputMaybe<Array<Landlords_Bool_Exp>>;
  contact_number?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "landlords" */
export type Landlords_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'landlords_pkey';

/** input type for inserting data into table "landlords" */
export type Landlords_Insert_Input = {
  contact_number?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Landlords_Max_Fields = {
  contact_number?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Landlords_Min_Fields = {
  contact_number?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "landlords" */
export type Landlords_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Landlords>;
};

/** on_conflict condition type for table "landlords" */
export type Landlords_On_Conflict = {
  constraint: Landlords_Constraint;
  update_columns?: Array<Landlords_Update_Column>;
  where?: InputMaybe<Landlords_Bool_Exp>;
};

/** Ordering options when selecting data from "landlords". */
export type Landlords_Order_By = {
  contact_number?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: landlords */
export type Landlords_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "landlords" */
export type Landlords_Select_Column =
  /** column name */
  | 'contact_number'
  /** column name */
  | 'email'
  /** column name */
  | 'id'
  /** column name */
  | 'name';

/** input type for updating data in table "landlords" */
export type Landlords_Set_Input = {
  contact_number?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "landlords" */
export type Landlords_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Landlords_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Landlords_Stream_Cursor_Value_Input = {
  contact_number?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "landlords" */
export type Landlords_Update_Column =
  /** column name */
  | 'contact_number'
  /** column name */
  | 'email'
  /** column name */
  | 'id'
  /** column name */
  | 'name';

export type Landlords_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Landlords_Set_Input>;
  /** filter the rows which have to be updated */
  where: Landlords_Bool_Exp;
};

/** columns and relationships of "monthly_expenses" */
export type Monthly_Expenses = {
  amount?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  due_day?: Maybe<Scalars['Int']['output']>;
  expense_date?: Maybe<Scalars['date']['output']>;
  house_id?: Maybe<Scalars['uuid']['output']>;
  id: Scalars['uuid']['output'];
};

/** aggregated selection of "monthly_expenses" */
export type Monthly_Expenses_Aggregate = {
  aggregate?: Maybe<Monthly_Expenses_Aggregate_Fields>;
  nodes: Array<Monthly_Expenses>;
};

/** aggregate fields of "monthly_expenses" */
export type Monthly_Expenses_Aggregate_Fields = {
  avg?: Maybe<Monthly_Expenses_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Monthly_Expenses_Max_Fields>;
  min?: Maybe<Monthly_Expenses_Min_Fields>;
  stddev?: Maybe<Monthly_Expenses_Stddev_Fields>;
  stddev_pop?: Maybe<Monthly_Expenses_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Monthly_Expenses_Stddev_Samp_Fields>;
  sum?: Maybe<Monthly_Expenses_Sum_Fields>;
  var_pop?: Maybe<Monthly_Expenses_Var_Pop_Fields>;
  var_samp?: Maybe<Monthly_Expenses_Var_Samp_Fields>;
  variance?: Maybe<Monthly_Expenses_Variance_Fields>;
};


/** aggregate fields of "monthly_expenses" */
export type Monthly_Expenses_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Monthly_Expenses_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Monthly_Expenses_Avg_Fields = {
  amount?: Maybe<Scalars['Float']['output']>;
  due_day?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "monthly_expenses". All fields are combined with a logical 'AND'. */
export type Monthly_Expenses_Bool_Exp = {
  _and?: InputMaybe<Array<Monthly_Expenses_Bool_Exp>>;
  _not?: InputMaybe<Monthly_Expenses_Bool_Exp>;
  _or?: InputMaybe<Array<Monthly_Expenses_Bool_Exp>>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  created_at?: InputMaybe<Date_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  due_day?: InputMaybe<Int_Comparison_Exp>;
  expense_date?: InputMaybe<Date_Comparison_Exp>;
  house_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "monthly_expenses" */
export type Monthly_Expenses_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'monthly_expenses_pkey';

/** input type for incrementing numeric columns in table "monthly_expenses" */
export type Monthly_Expenses_Inc_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  due_day?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "monthly_expenses" */
export type Monthly_Expenses_Insert_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  created_at?: InputMaybe<Scalars['date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  due_day?: InputMaybe<Scalars['Int']['input']>;
  expense_date?: InputMaybe<Scalars['date']['input']>;
  house_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Monthly_Expenses_Max_Fields = {
  amount?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  due_day?: Maybe<Scalars['Int']['output']>;
  expense_date?: Maybe<Scalars['date']['output']>;
  house_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Monthly_Expenses_Min_Fields = {
  amount?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  due_day?: Maybe<Scalars['Int']['output']>;
  expense_date?: Maybe<Scalars['date']['output']>;
  house_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "monthly_expenses" */
export type Monthly_Expenses_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Monthly_Expenses>;
};

/** on_conflict condition type for table "monthly_expenses" */
export type Monthly_Expenses_On_Conflict = {
  constraint: Monthly_Expenses_Constraint;
  update_columns?: Array<Monthly_Expenses_Update_Column>;
  where?: InputMaybe<Monthly_Expenses_Bool_Exp>;
};

/** Ordering options when selecting data from "monthly_expenses". */
export type Monthly_Expenses_Order_By = {
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  due_day?: InputMaybe<Order_By>;
  expense_date?: InputMaybe<Order_By>;
  house_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: monthly_expenses */
export type Monthly_Expenses_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "monthly_expenses" */
export type Monthly_Expenses_Select_Column =
  /** column name */
  | 'amount'
  /** column name */
  | 'created_at'
  /** column name */
  | 'description'
  /** column name */
  | 'due_day'
  /** column name */
  | 'expense_date'
  /** column name */
  | 'house_id'
  /** column name */
  | 'id';

/** input type for updating data in table "monthly_expenses" */
export type Monthly_Expenses_Set_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  created_at?: InputMaybe<Scalars['date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  due_day?: InputMaybe<Scalars['Int']['input']>;
  expense_date?: InputMaybe<Scalars['date']['input']>;
  house_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Monthly_Expenses_Stddev_Fields = {
  amount?: Maybe<Scalars['Float']['output']>;
  due_day?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Monthly_Expenses_Stddev_Pop_Fields = {
  amount?: Maybe<Scalars['Float']['output']>;
  due_day?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Monthly_Expenses_Stddev_Samp_Fields = {
  amount?: Maybe<Scalars['Float']['output']>;
  due_day?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "monthly_expenses" */
export type Monthly_Expenses_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Monthly_Expenses_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Monthly_Expenses_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  created_at?: InputMaybe<Scalars['date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  due_day?: InputMaybe<Scalars['Int']['input']>;
  expense_date?: InputMaybe<Scalars['date']['input']>;
  house_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Monthly_Expenses_Sum_Fields = {
  amount?: Maybe<Scalars['numeric']['output']>;
  due_day?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "monthly_expenses" */
export type Monthly_Expenses_Update_Column =
  /** column name */
  | 'amount'
  /** column name */
  | 'created_at'
  /** column name */
  | 'description'
  /** column name */
  | 'due_day'
  /** column name */
  | 'expense_date'
  /** column name */
  | 'house_id'
  /** column name */
  | 'id';

export type Monthly_Expenses_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Monthly_Expenses_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Monthly_Expenses_Set_Input>;
  /** filter the rows which have to be updated */
  where: Monthly_Expenses_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Monthly_Expenses_Var_Pop_Fields = {
  amount?: Maybe<Scalars['Float']['output']>;
  due_day?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Monthly_Expenses_Var_Samp_Fields = {
  amount?: Maybe<Scalars['Float']['output']>;
  due_day?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Monthly_Expenses_Variance_Fields = {
  amount?: Maybe<Scalars['Float']['output']>;
  due_day?: Maybe<Scalars['Float']['output']>;
};

/** mutation root */
export type Mutation_Root = {
  /** delete data from the table: "contracts" */
  delete_contracts?: Maybe<Contracts_Mutation_Response>;
  /** delete single row from the table: "contracts" */
  delete_contracts_by_pk?: Maybe<Contracts>;
  /** delete data from the table: "electricity" */
  delete_electricity?: Maybe<Electricity_Mutation_Response>;
  /** delete single row from the table: "electricity" */
  delete_electricity_by_pk?: Maybe<Electricity>;
  /** delete data from the table: "expenses" */
  delete_expenses?: Maybe<Expenses_Mutation_Response>;
  /** delete single row from the table: "expenses" */
  delete_expenses_by_pk?: Maybe<Expenses>;
  /** delete data from the table: "houses" */
  delete_houses?: Maybe<Houses_Mutation_Response>;
  /** delete single row from the table: "houses" */
  delete_houses_by_pk?: Maybe<Houses>;
  /** delete data from the table: "landlords" */
  delete_landlords?: Maybe<Landlords_Mutation_Response>;
  /** delete single row from the table: "landlords" */
  delete_landlords_by_pk?: Maybe<Landlords>;
  /** delete data from the table: "monthly_expenses" */
  delete_monthly_expenses?: Maybe<Monthly_Expenses_Mutation_Response>;
  /** delete single row from the table: "monthly_expenses" */
  delete_monthly_expenses_by_pk?: Maybe<Monthly_Expenses>;
  /** delete data from the table: "payments" */
  delete_payments?: Maybe<Payments_Mutation_Response>;
  /** delete single row from the table: "payments" */
  delete_payments_by_pk?: Maybe<Payments>;
  /** delete data from the table: "reminders" */
  delete_reminders?: Maybe<Reminders_Mutation_Response>;
  /** delete single row from the table: "reminders" */
  delete_reminders_by_pk?: Maybe<Reminders>;
  /** delete data from the table: "rooms" */
  delete_rooms?: Maybe<Rooms_Mutation_Response>;
  /** delete single row from the table: "rooms" */
  delete_rooms_by_pk?: Maybe<Rooms>;
  /** delete data from the table: "tenants" */
  delete_tenants?: Maybe<Tenants_Mutation_Response>;
  /** delete single row from the table: "tenants" */
  delete_tenants_by_pk?: Maybe<Tenants>;
  /** insert data into the table: "contracts" */
  insert_contracts?: Maybe<Contracts_Mutation_Response>;
  /** insert a single row into the table: "contracts" */
  insert_contracts_one?: Maybe<Contracts>;
  /** insert data into the table: "electricity" */
  insert_electricity?: Maybe<Electricity_Mutation_Response>;
  /** insert a single row into the table: "electricity" */
  insert_electricity_one?: Maybe<Electricity>;
  /** insert data into the table: "expenses" */
  insert_expenses?: Maybe<Expenses_Mutation_Response>;
  /** insert a single row into the table: "expenses" */
  insert_expenses_one?: Maybe<Expenses>;
  /** insert data into the table: "houses" */
  insert_houses?: Maybe<Houses_Mutation_Response>;
  /** insert a single row into the table: "houses" */
  insert_houses_one?: Maybe<Houses>;
  /** insert data into the table: "landlords" */
  insert_landlords?: Maybe<Landlords_Mutation_Response>;
  /** insert a single row into the table: "landlords" */
  insert_landlords_one?: Maybe<Landlords>;
  /** insert data into the table: "monthly_expenses" */
  insert_monthly_expenses?: Maybe<Monthly_Expenses_Mutation_Response>;
  /** insert a single row into the table: "monthly_expenses" */
  insert_monthly_expenses_one?: Maybe<Monthly_Expenses>;
  /** insert data into the table: "payments" */
  insert_payments?: Maybe<Payments_Mutation_Response>;
  /** insert a single row into the table: "payments" */
  insert_payments_one?: Maybe<Payments>;
  /** insert data into the table: "reminders" */
  insert_reminders?: Maybe<Reminders_Mutation_Response>;
  /** insert a single row into the table: "reminders" */
  insert_reminders_one?: Maybe<Reminders>;
  /** insert data into the table: "rooms" */
  insert_rooms?: Maybe<Rooms_Mutation_Response>;
  /** insert a single row into the table: "rooms" */
  insert_rooms_one?: Maybe<Rooms>;
  /** insert data into the table: "tenants" */
  insert_tenants?: Maybe<Tenants_Mutation_Response>;
  /** insert a single row into the table: "tenants" */
  insert_tenants_one?: Maybe<Tenants>;
  /** update data of the table: "contracts" */
  update_contracts?: Maybe<Contracts_Mutation_Response>;
  /** update single row of the table: "contracts" */
  update_contracts_by_pk?: Maybe<Contracts>;
  /** update multiples rows of table: "contracts" */
  update_contracts_many?: Maybe<Array<Maybe<Contracts_Mutation_Response>>>;
  /** update data of the table: "electricity" */
  update_electricity?: Maybe<Electricity_Mutation_Response>;
  /** update single row of the table: "electricity" */
  update_electricity_by_pk?: Maybe<Electricity>;
  /** update multiples rows of table: "electricity" */
  update_electricity_many?: Maybe<Array<Maybe<Electricity_Mutation_Response>>>;
  /** update data of the table: "expenses" */
  update_expenses?: Maybe<Expenses_Mutation_Response>;
  /** update single row of the table: "expenses" */
  update_expenses_by_pk?: Maybe<Expenses>;
  /** update multiples rows of table: "expenses" */
  update_expenses_many?: Maybe<Array<Maybe<Expenses_Mutation_Response>>>;
  /** update data of the table: "houses" */
  update_houses?: Maybe<Houses_Mutation_Response>;
  /** update single row of the table: "houses" */
  update_houses_by_pk?: Maybe<Houses>;
  /** update multiples rows of table: "houses" */
  update_houses_many?: Maybe<Array<Maybe<Houses_Mutation_Response>>>;
  /** update data of the table: "landlords" */
  update_landlords?: Maybe<Landlords_Mutation_Response>;
  /** update single row of the table: "landlords" */
  update_landlords_by_pk?: Maybe<Landlords>;
  /** update multiples rows of table: "landlords" */
  update_landlords_many?: Maybe<Array<Maybe<Landlords_Mutation_Response>>>;
  /** update data of the table: "monthly_expenses" */
  update_monthly_expenses?: Maybe<Monthly_Expenses_Mutation_Response>;
  /** update single row of the table: "monthly_expenses" */
  update_monthly_expenses_by_pk?: Maybe<Monthly_Expenses>;
  /** update multiples rows of table: "monthly_expenses" */
  update_monthly_expenses_many?: Maybe<Array<Maybe<Monthly_Expenses_Mutation_Response>>>;
  /** update data of the table: "payments" */
  update_payments?: Maybe<Payments_Mutation_Response>;
  /** update single row of the table: "payments" */
  update_payments_by_pk?: Maybe<Payments>;
  /** update multiples rows of table: "payments" */
  update_payments_many?: Maybe<Array<Maybe<Payments_Mutation_Response>>>;
  /** update data of the table: "reminders" */
  update_reminders?: Maybe<Reminders_Mutation_Response>;
  /** update single row of the table: "reminders" */
  update_reminders_by_pk?: Maybe<Reminders>;
  /** update multiples rows of table: "reminders" */
  update_reminders_many?: Maybe<Array<Maybe<Reminders_Mutation_Response>>>;
  /** update data of the table: "rooms" */
  update_rooms?: Maybe<Rooms_Mutation_Response>;
  /** update single row of the table: "rooms" */
  update_rooms_by_pk?: Maybe<Rooms>;
  /** update multiples rows of table: "rooms" */
  update_rooms_many?: Maybe<Array<Maybe<Rooms_Mutation_Response>>>;
  /** update data of the table: "tenants" */
  update_tenants?: Maybe<Tenants_Mutation_Response>;
  /** update single row of the table: "tenants" */
  update_tenants_by_pk?: Maybe<Tenants>;
  /** update multiples rows of table: "tenants" */
  update_tenants_many?: Maybe<Array<Maybe<Tenants_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_ContractsArgs = {
  where: Contracts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Contracts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ElectricityArgs = {
  where: Electricity_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Electricity_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ExpensesArgs = {
  where: Expenses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Expenses_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_HousesArgs = {
  where: Houses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Houses_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_LandlordsArgs = {
  where: Landlords_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Landlords_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Monthly_ExpensesArgs = {
  where: Monthly_Expenses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Monthly_Expenses_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PaymentsArgs = {
  where: Payments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Payments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_RemindersArgs = {
  where: Reminders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Reminders_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_RoomsArgs = {
  where: Rooms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rooms_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_TenantsArgs = {
  where: Tenants_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tenants_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_ContractsArgs = {
  objects: Array<Contracts_Insert_Input>;
  on_conflict?: InputMaybe<Contracts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Contracts_OneArgs = {
  object: Contracts_Insert_Input;
  on_conflict?: InputMaybe<Contracts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ElectricityArgs = {
  objects: Array<Electricity_Insert_Input>;
  on_conflict?: InputMaybe<Electricity_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Electricity_OneArgs = {
  object: Electricity_Insert_Input;
  on_conflict?: InputMaybe<Electricity_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ExpensesArgs = {
  objects: Array<Expenses_Insert_Input>;
  on_conflict?: InputMaybe<Expenses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Expenses_OneArgs = {
  object: Expenses_Insert_Input;
  on_conflict?: InputMaybe<Expenses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_HousesArgs = {
  objects: Array<Houses_Insert_Input>;
  on_conflict?: InputMaybe<Houses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Houses_OneArgs = {
  object: Houses_Insert_Input;
  on_conflict?: InputMaybe<Houses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LandlordsArgs = {
  objects: Array<Landlords_Insert_Input>;
  on_conflict?: InputMaybe<Landlords_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Landlords_OneArgs = {
  object: Landlords_Insert_Input;
  on_conflict?: InputMaybe<Landlords_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Monthly_ExpensesArgs = {
  objects: Array<Monthly_Expenses_Insert_Input>;
  on_conflict?: InputMaybe<Monthly_Expenses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Monthly_Expenses_OneArgs = {
  object: Monthly_Expenses_Insert_Input;
  on_conflict?: InputMaybe<Monthly_Expenses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PaymentsArgs = {
  objects: Array<Payments_Insert_Input>;
  on_conflict?: InputMaybe<Payments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payments_OneArgs = {
  object: Payments_Insert_Input;
  on_conflict?: InputMaybe<Payments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RemindersArgs = {
  objects: Array<Reminders_Insert_Input>;
  on_conflict?: InputMaybe<Reminders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Reminders_OneArgs = {
  object: Reminders_Insert_Input;
  on_conflict?: InputMaybe<Reminders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RoomsArgs = {
  objects: Array<Rooms_Insert_Input>;
  on_conflict?: InputMaybe<Rooms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rooms_OneArgs = {
  object: Rooms_Insert_Input;
  on_conflict?: InputMaybe<Rooms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TenantsArgs = {
  objects: Array<Tenants_Insert_Input>;
  on_conflict?: InputMaybe<Tenants_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tenants_OneArgs = {
  object: Tenants_Insert_Input;
  on_conflict?: InputMaybe<Tenants_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ContractsArgs = {
  _set?: InputMaybe<Contracts_Set_Input>;
  where: Contracts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Contracts_By_PkArgs = {
  _set?: InputMaybe<Contracts_Set_Input>;
  pk_columns: Contracts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Contracts_ManyArgs = {
  updates: Array<Contracts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ElectricityArgs = {
  _set?: InputMaybe<Electricity_Set_Input>;
  where: Electricity_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Electricity_By_PkArgs = {
  _set?: InputMaybe<Electricity_Set_Input>;
  pk_columns: Electricity_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Electricity_ManyArgs = {
  updates: Array<Electricity_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ExpensesArgs = {
  _inc?: InputMaybe<Expenses_Inc_Input>;
  _set?: InputMaybe<Expenses_Set_Input>;
  where: Expenses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Expenses_By_PkArgs = {
  _inc?: InputMaybe<Expenses_Inc_Input>;
  _set?: InputMaybe<Expenses_Set_Input>;
  pk_columns: Expenses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Expenses_ManyArgs = {
  updates: Array<Expenses_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_HousesArgs = {
  _set?: InputMaybe<Houses_Set_Input>;
  where: Houses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Houses_By_PkArgs = {
  _set?: InputMaybe<Houses_Set_Input>;
  pk_columns: Houses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Houses_ManyArgs = {
  updates: Array<Houses_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_LandlordsArgs = {
  _set?: InputMaybe<Landlords_Set_Input>;
  where: Landlords_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Landlords_By_PkArgs = {
  _set?: InputMaybe<Landlords_Set_Input>;
  pk_columns: Landlords_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Landlords_ManyArgs = {
  updates: Array<Landlords_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Monthly_ExpensesArgs = {
  _inc?: InputMaybe<Monthly_Expenses_Inc_Input>;
  _set?: InputMaybe<Monthly_Expenses_Set_Input>;
  where: Monthly_Expenses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Monthly_Expenses_By_PkArgs = {
  _inc?: InputMaybe<Monthly_Expenses_Inc_Input>;
  _set?: InputMaybe<Monthly_Expenses_Set_Input>;
  pk_columns: Monthly_Expenses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Monthly_Expenses_ManyArgs = {
  updates: Array<Monthly_Expenses_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PaymentsArgs = {
  _inc?: InputMaybe<Payments_Inc_Input>;
  _set?: InputMaybe<Payments_Set_Input>;
  where: Payments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Payments_By_PkArgs = {
  _inc?: InputMaybe<Payments_Inc_Input>;
  _set?: InputMaybe<Payments_Set_Input>;
  pk_columns: Payments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Payments_ManyArgs = {
  updates: Array<Payments_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_RemindersArgs = {
  _set?: InputMaybe<Reminders_Set_Input>;
  where: Reminders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Reminders_By_PkArgs = {
  _set?: InputMaybe<Reminders_Set_Input>;
  pk_columns: Reminders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Reminders_ManyArgs = {
  updates: Array<Reminders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_RoomsArgs = {
  _inc?: InputMaybe<Rooms_Inc_Input>;
  _set?: InputMaybe<Rooms_Set_Input>;
  where: Rooms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rooms_By_PkArgs = {
  _inc?: InputMaybe<Rooms_Inc_Input>;
  _set?: InputMaybe<Rooms_Set_Input>;
  pk_columns: Rooms_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rooms_ManyArgs = {
  updates: Array<Rooms_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TenantsArgs = {
  _set?: InputMaybe<Tenants_Set_Input>;
  where: Tenants_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tenants_By_PkArgs = {
  _set?: InputMaybe<Tenants_Set_Input>;
  pk_columns: Tenants_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tenants_ManyArgs = {
  updates: Array<Tenants_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export type Order_By =
  /** in ascending order, nulls last */
  | 'asc'
  /** in ascending order, nulls first */
  | 'asc_nulls_first'
  /** in ascending order, nulls last */
  | 'asc_nulls_last'
  /** in descending order, nulls first */
  | 'desc'
  /** in descending order, nulls first */
  | 'desc_nulls_first'
  /** in descending order, nulls last */
  | 'desc_nulls_last';

/** columns and relationships of "payments" */
export type Payments = {
  amount?: Maybe<Scalars['numeric']['output']>;
  id: Scalars['uuid']['output'];
  payment_date?: Maybe<Scalars['timestamp']['output']>;
  payment_method?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "payments" */
export type Payments_Aggregate = {
  aggregate?: Maybe<Payments_Aggregate_Fields>;
  nodes: Array<Payments>;
};

/** aggregate fields of "payments" */
export type Payments_Aggregate_Fields = {
  avg?: Maybe<Payments_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Payments_Max_Fields>;
  min?: Maybe<Payments_Min_Fields>;
  stddev?: Maybe<Payments_Stddev_Fields>;
  stddev_pop?: Maybe<Payments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Payments_Stddev_Samp_Fields>;
  sum?: Maybe<Payments_Sum_Fields>;
  var_pop?: Maybe<Payments_Var_Pop_Fields>;
  var_samp?: Maybe<Payments_Var_Samp_Fields>;
  variance?: Maybe<Payments_Variance_Fields>;
};


/** aggregate fields of "payments" */
export type Payments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Payments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Payments_Avg_Fields = {
  amount?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "payments". All fields are combined with a logical 'AND'. */
export type Payments_Bool_Exp = {
  _and?: InputMaybe<Array<Payments_Bool_Exp>>;
  _not?: InputMaybe<Payments_Bool_Exp>;
  _or?: InputMaybe<Array<Payments_Bool_Exp>>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  payment_date?: InputMaybe<Timestamp_Comparison_Exp>;
  payment_method?: InputMaybe<String_Comparison_Exp>;
  tenant_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "payments" */
export type Payments_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'payments_pkey';

/** input type for incrementing numeric columns in table "payments" */
export type Payments_Inc_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "payments" */
export type Payments_Insert_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  payment_date?: InputMaybe<Scalars['timestamp']['input']>;
  payment_method?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Payments_Max_Fields = {
  amount?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  payment_date?: Maybe<Scalars['timestamp']['output']>;
  payment_method?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Payments_Min_Fields = {
  amount?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  payment_date?: Maybe<Scalars['timestamp']['output']>;
  payment_method?: Maybe<Scalars['String']['output']>;
  tenant_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "payments" */
export type Payments_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Payments>;
};

/** on_conflict condition type for table "payments" */
export type Payments_On_Conflict = {
  constraint: Payments_Constraint;
  update_columns?: Array<Payments_Update_Column>;
  where?: InputMaybe<Payments_Bool_Exp>;
};

/** Ordering options when selecting data from "payments". */
export type Payments_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payment_date?: InputMaybe<Order_By>;
  payment_method?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: payments */
export type Payments_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "payments" */
export type Payments_Select_Column =
  /** column name */
  | 'amount'
  /** column name */
  | 'id'
  /** column name */
  | 'payment_date'
  /** column name */
  | 'payment_method'
  /** column name */
  | 'tenant_id';

/** input type for updating data in table "payments" */
export type Payments_Set_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  payment_date?: InputMaybe<Scalars['timestamp']['input']>;
  payment_method?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Payments_Stddev_Fields = {
  amount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Payments_Stddev_Pop_Fields = {
  amount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Payments_Stddev_Samp_Fields = {
  amount?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "payments" */
export type Payments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Payments_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Payments_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  payment_date?: InputMaybe<Scalars['timestamp']['input']>;
  payment_method?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Payments_Sum_Fields = {
  amount?: Maybe<Scalars['numeric']['output']>;
};

/** update columns of table "payments" */
export type Payments_Update_Column =
  /** column name */
  | 'amount'
  /** column name */
  | 'id'
  /** column name */
  | 'payment_date'
  /** column name */
  | 'payment_method'
  /** column name */
  | 'tenant_id';

export type Payments_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Payments_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Payments_Set_Input>;
  /** filter the rows which have to be updated */
  where: Payments_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Payments_Var_Pop_Fields = {
  amount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Payments_Var_Samp_Fields = {
  amount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Payments_Variance_Fields = {
  amount?: Maybe<Scalars['Float']['output']>;
};

export type Query_Root = {
  /** fetch data from the table: "contracts" */
  contracts: Array<Contracts>;
  /** fetch aggregated fields from the table: "contracts" */
  contracts_aggregate: Contracts_Aggregate;
  /** fetch data from the table: "contracts" using primary key columns */
  contracts_by_pk?: Maybe<Contracts>;
  /** fetch data from the table: "electricity" */
  electricity: Array<Electricity>;
  /** fetch aggregated fields from the table: "electricity" */
  electricity_aggregate: Electricity_Aggregate;
  /** fetch data from the table: "electricity" using primary key columns */
  electricity_by_pk?: Maybe<Electricity>;
  /** fetch data from the table: "expenses" */
  expenses: Array<Expenses>;
  /** fetch aggregated fields from the table: "expenses" */
  expenses_aggregate: Expenses_Aggregate;
  /** fetch data from the table: "expenses" using primary key columns */
  expenses_by_pk?: Maybe<Expenses>;
  /** fetch data from the table: "houses" */
  houses: Array<Houses>;
  /** fetch aggregated fields from the table: "houses" */
  houses_aggregate: Houses_Aggregate;
  /** fetch data from the table: "houses" using primary key columns */
  houses_by_pk?: Maybe<Houses>;
  /** fetch data from the table: "landlords" */
  landlords: Array<Landlords>;
  /** fetch aggregated fields from the table: "landlords" */
  landlords_aggregate: Landlords_Aggregate;
  /** fetch data from the table: "landlords" using primary key columns */
  landlords_by_pk?: Maybe<Landlords>;
  /** fetch data from the table: "monthly_expenses" */
  monthly_expenses: Array<Monthly_Expenses>;
  /** fetch aggregated fields from the table: "monthly_expenses" */
  monthly_expenses_aggregate: Monthly_Expenses_Aggregate;
  /** fetch data from the table: "monthly_expenses" using primary key columns */
  monthly_expenses_by_pk?: Maybe<Monthly_Expenses>;
  /** fetch data from the table: "payments" */
  payments: Array<Payments>;
  /** fetch aggregated fields from the table: "payments" */
  payments_aggregate: Payments_Aggregate;
  /** fetch data from the table: "payments" using primary key columns */
  payments_by_pk?: Maybe<Payments>;
  /** fetch data from the table: "reminders" */
  reminders: Array<Reminders>;
  /** fetch aggregated fields from the table: "reminders" */
  reminders_aggregate: Reminders_Aggregate;
  /** fetch data from the table: "reminders" using primary key columns */
  reminders_by_pk?: Maybe<Reminders>;
  /** fetch data from the table: "rooms" */
  rooms: Array<Rooms>;
  /** fetch aggregated fields from the table: "rooms" */
  rooms_aggregate: Rooms_Aggregate;
  /** fetch data from the table: "rooms" using primary key columns */
  rooms_by_pk?: Maybe<Rooms>;
  /** fetch data from the table: "tenants" */
  tenants: Array<Tenants>;
  /** fetch aggregated fields from the table: "tenants" */
  tenants_aggregate: Tenants_Aggregate;
  /** fetch data from the table: "tenants" using primary key columns */
  tenants_by_pk?: Maybe<Tenants>;
};


export type Query_RootContractsArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contracts_Order_By>>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};


export type Query_RootContracts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contracts_Order_By>>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};


export type Query_RootContracts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootElectricityArgs = {
  distinct_on?: InputMaybe<Array<Electricity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Electricity_Order_By>>;
  where?: InputMaybe<Electricity_Bool_Exp>;
};


export type Query_RootElectricity_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Electricity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Electricity_Order_By>>;
  where?: InputMaybe<Electricity_Bool_Exp>;
};


export type Query_RootElectricity_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootExpensesArgs = {
  distinct_on?: InputMaybe<Array<Expenses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Expenses_Order_By>>;
  where?: InputMaybe<Expenses_Bool_Exp>;
};


export type Query_RootExpenses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Expenses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Expenses_Order_By>>;
  where?: InputMaybe<Expenses_Bool_Exp>;
};


export type Query_RootExpenses_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootHousesArgs = {
  distinct_on?: InputMaybe<Array<Houses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Houses_Order_By>>;
  where?: InputMaybe<Houses_Bool_Exp>;
};


export type Query_RootHouses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Houses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Houses_Order_By>>;
  where?: InputMaybe<Houses_Bool_Exp>;
};


export type Query_RootHouses_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootLandlordsArgs = {
  distinct_on?: InputMaybe<Array<Landlords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Landlords_Order_By>>;
  where?: InputMaybe<Landlords_Bool_Exp>;
};


export type Query_RootLandlords_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Landlords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Landlords_Order_By>>;
  where?: InputMaybe<Landlords_Bool_Exp>;
};


export type Query_RootLandlords_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMonthly_ExpensesArgs = {
  distinct_on?: InputMaybe<Array<Monthly_Expenses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Monthly_Expenses_Order_By>>;
  where?: InputMaybe<Monthly_Expenses_Bool_Exp>;
};


export type Query_RootMonthly_Expenses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Monthly_Expenses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Monthly_Expenses_Order_By>>;
  where?: InputMaybe<Monthly_Expenses_Bool_Exp>;
};


export type Query_RootMonthly_Expenses_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPaymentsArgs = {
  distinct_on?: InputMaybe<Array<Payments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payments_Order_By>>;
  where?: InputMaybe<Payments_Bool_Exp>;
};


export type Query_RootPayments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payments_Order_By>>;
  where?: InputMaybe<Payments_Bool_Exp>;
};


export type Query_RootPayments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRemindersArgs = {
  distinct_on?: InputMaybe<Array<Reminders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reminders_Order_By>>;
  where?: InputMaybe<Reminders_Bool_Exp>;
};


export type Query_RootReminders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reminders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reminders_Order_By>>;
  where?: InputMaybe<Reminders_Bool_Exp>;
};


export type Query_RootReminders_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRoomsArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rooms_Order_By>>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};


export type Query_RootRooms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rooms_Order_By>>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};


export type Query_RootRooms_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootTenantsArgs = {
  distinct_on?: InputMaybe<Array<Tenants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tenants_Order_By>>;
  where?: InputMaybe<Tenants_Bool_Exp>;
};


export type Query_RootTenants_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tenants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tenants_Order_By>>;
  where?: InputMaybe<Tenants_Bool_Exp>;
};


export type Query_RootTenants_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "reminders" */
export type Reminders = {
  checked?: Maybe<Scalars['Boolean']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  reminder_date: Scalars['date']['output'];
  tenant_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "reminders" */
export type Reminders_Aggregate = {
  aggregate?: Maybe<Reminders_Aggregate_Fields>;
  nodes: Array<Reminders>;
};

/** aggregate fields of "reminders" */
export type Reminders_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Reminders_Max_Fields>;
  min?: Maybe<Reminders_Min_Fields>;
};


/** aggregate fields of "reminders" */
export type Reminders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Reminders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "reminders". All fields are combined with a logical 'AND'. */
export type Reminders_Bool_Exp = {
  _and?: InputMaybe<Array<Reminders_Bool_Exp>>;
  _not?: InputMaybe<Reminders_Bool_Exp>;
  _or?: InputMaybe<Array<Reminders_Bool_Exp>>;
  checked?: InputMaybe<Boolean_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  reminder_date?: InputMaybe<Date_Comparison_Exp>;
  tenant_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "reminders" */
export type Reminders_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'reminders_pkey';

/** input type for inserting data into table "reminders" */
export type Reminders_Insert_Input = {
  checked?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  reminder_date?: InputMaybe<Scalars['date']['input']>;
  tenant_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Reminders_Max_Fields = {
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  reminder_date?: Maybe<Scalars['date']['output']>;
  tenant_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Reminders_Min_Fields = {
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  reminder_date?: Maybe<Scalars['date']['output']>;
  tenant_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "reminders" */
export type Reminders_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Reminders>;
};

/** on_conflict condition type for table "reminders" */
export type Reminders_On_Conflict = {
  constraint: Reminders_Constraint;
  update_columns?: Array<Reminders_Update_Column>;
  where?: InputMaybe<Reminders_Bool_Exp>;
};

/** Ordering options when selecting data from "reminders". */
export type Reminders_Order_By = {
  checked?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reminder_date?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: reminders */
export type Reminders_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "reminders" */
export type Reminders_Select_Column =
  /** column name */
  | 'checked'
  /** column name */
  | 'description'
  /** column name */
  | 'id'
  /** column name */
  | 'reminder_date'
  /** column name */
  | 'tenant_id';

/** input type for updating data in table "reminders" */
export type Reminders_Set_Input = {
  checked?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  reminder_date?: InputMaybe<Scalars['date']['input']>;
  tenant_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "reminders" */
export type Reminders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Reminders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Reminders_Stream_Cursor_Value_Input = {
  checked?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  reminder_date?: InputMaybe<Scalars['date']['input']>;
  tenant_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "reminders" */
export type Reminders_Update_Column =
  /** column name */
  | 'checked'
  /** column name */
  | 'description'
  /** column name */
  | 'id'
  /** column name */
  | 'reminder_date'
  /** column name */
  | 'tenant_id';

export type Reminders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Reminders_Set_Input>;
  /** filter the rows which have to be updated */
  where: Reminders_Bool_Exp;
};

/** columns and relationships of "rooms" */
export type Rooms = {
  house_id?: Maybe<Scalars['uuid']['output']>;
  id: Scalars['uuid']['output'];
  rent_amount?: Maybe<Scalars['numeric']['output']>;
  room_number?: Maybe<Scalars['Int']['output']>;
};

/** aggregated selection of "rooms" */
export type Rooms_Aggregate = {
  aggregate?: Maybe<Rooms_Aggregate_Fields>;
  nodes: Array<Rooms>;
};

/** aggregate fields of "rooms" */
export type Rooms_Aggregate_Fields = {
  avg?: Maybe<Rooms_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Rooms_Max_Fields>;
  min?: Maybe<Rooms_Min_Fields>;
  stddev?: Maybe<Rooms_Stddev_Fields>;
  stddev_pop?: Maybe<Rooms_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rooms_Stddev_Samp_Fields>;
  sum?: Maybe<Rooms_Sum_Fields>;
  var_pop?: Maybe<Rooms_Var_Pop_Fields>;
  var_samp?: Maybe<Rooms_Var_Samp_Fields>;
  variance?: Maybe<Rooms_Variance_Fields>;
};


/** aggregate fields of "rooms" */
export type Rooms_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rooms_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Rooms_Avg_Fields = {
  rent_amount?: Maybe<Scalars['Float']['output']>;
  room_number?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "rooms". All fields are combined with a logical 'AND'. */
export type Rooms_Bool_Exp = {
  _and?: InputMaybe<Array<Rooms_Bool_Exp>>;
  _not?: InputMaybe<Rooms_Bool_Exp>;
  _or?: InputMaybe<Array<Rooms_Bool_Exp>>;
  house_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  rent_amount?: InputMaybe<Numeric_Comparison_Exp>;
  room_number?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "rooms" */
export type Rooms_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'rooms_pkey';

/** input type for incrementing numeric columns in table "rooms" */
export type Rooms_Inc_Input = {
  rent_amount?: InputMaybe<Scalars['numeric']['input']>;
  room_number?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "rooms" */
export type Rooms_Insert_Input = {
  house_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  rent_amount?: InputMaybe<Scalars['numeric']['input']>;
  room_number?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Rooms_Max_Fields = {
  house_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  rent_amount?: Maybe<Scalars['numeric']['output']>;
  room_number?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Rooms_Min_Fields = {
  house_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  rent_amount?: Maybe<Scalars['numeric']['output']>;
  room_number?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "rooms" */
export type Rooms_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Rooms>;
};

/** on_conflict condition type for table "rooms" */
export type Rooms_On_Conflict = {
  constraint: Rooms_Constraint;
  update_columns?: Array<Rooms_Update_Column>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};

/** Ordering options when selecting data from "rooms". */
export type Rooms_Order_By = {
  house_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rent_amount?: InputMaybe<Order_By>;
  room_number?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rooms */
export type Rooms_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "rooms" */
export type Rooms_Select_Column =
  /** column name */
  | 'house_id'
  /** column name */
  | 'id'
  /** column name */
  | 'rent_amount'
  /** column name */
  | 'room_number';

/** input type for updating data in table "rooms" */
export type Rooms_Set_Input = {
  house_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  rent_amount?: InputMaybe<Scalars['numeric']['input']>;
  room_number?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Rooms_Stddev_Fields = {
  rent_amount?: Maybe<Scalars['Float']['output']>;
  room_number?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Rooms_Stddev_Pop_Fields = {
  rent_amount?: Maybe<Scalars['Float']['output']>;
  room_number?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Rooms_Stddev_Samp_Fields = {
  rent_amount?: Maybe<Scalars['Float']['output']>;
  room_number?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "rooms" */
export type Rooms_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rooms_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rooms_Stream_Cursor_Value_Input = {
  house_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  rent_amount?: InputMaybe<Scalars['numeric']['input']>;
  room_number?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Rooms_Sum_Fields = {
  rent_amount?: Maybe<Scalars['numeric']['output']>;
  room_number?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "rooms" */
export type Rooms_Update_Column =
  /** column name */
  | 'house_id'
  /** column name */
  | 'id'
  /** column name */
  | 'rent_amount'
  /** column name */
  | 'room_number';

export type Rooms_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Rooms_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rooms_Set_Input>;
  /** filter the rows which have to be updated */
  where: Rooms_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Rooms_Var_Pop_Fields = {
  rent_amount?: Maybe<Scalars['Float']['output']>;
  room_number?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Rooms_Var_Samp_Fields = {
  rent_amount?: Maybe<Scalars['Float']['output']>;
  room_number?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Rooms_Variance_Fields = {
  rent_amount?: Maybe<Scalars['Float']['output']>;
  room_number?: Maybe<Scalars['Float']['output']>;
};

export type Subscription_Root = {
  /** fetch data from the table: "contracts" */
  contracts: Array<Contracts>;
  /** fetch aggregated fields from the table: "contracts" */
  contracts_aggregate: Contracts_Aggregate;
  /** fetch data from the table: "contracts" using primary key columns */
  contracts_by_pk?: Maybe<Contracts>;
  /** fetch data from the table in a streaming manner: "contracts" */
  contracts_stream: Array<Contracts>;
  /** fetch data from the table: "electricity" */
  electricity: Array<Electricity>;
  /** fetch aggregated fields from the table: "electricity" */
  electricity_aggregate: Electricity_Aggregate;
  /** fetch data from the table: "electricity" using primary key columns */
  electricity_by_pk?: Maybe<Electricity>;
  /** fetch data from the table in a streaming manner: "electricity" */
  electricity_stream: Array<Electricity>;
  /** fetch data from the table: "expenses" */
  expenses: Array<Expenses>;
  /** fetch aggregated fields from the table: "expenses" */
  expenses_aggregate: Expenses_Aggregate;
  /** fetch data from the table: "expenses" using primary key columns */
  expenses_by_pk?: Maybe<Expenses>;
  /** fetch data from the table in a streaming manner: "expenses" */
  expenses_stream: Array<Expenses>;
  /** fetch data from the table: "houses" */
  houses: Array<Houses>;
  /** fetch aggregated fields from the table: "houses" */
  houses_aggregate: Houses_Aggregate;
  /** fetch data from the table: "houses" using primary key columns */
  houses_by_pk?: Maybe<Houses>;
  /** fetch data from the table in a streaming manner: "houses" */
  houses_stream: Array<Houses>;
  /** fetch data from the table: "landlords" */
  landlords: Array<Landlords>;
  /** fetch aggregated fields from the table: "landlords" */
  landlords_aggregate: Landlords_Aggregate;
  /** fetch data from the table: "landlords" using primary key columns */
  landlords_by_pk?: Maybe<Landlords>;
  /** fetch data from the table in a streaming manner: "landlords" */
  landlords_stream: Array<Landlords>;
  /** fetch data from the table: "monthly_expenses" */
  monthly_expenses: Array<Monthly_Expenses>;
  /** fetch aggregated fields from the table: "monthly_expenses" */
  monthly_expenses_aggregate: Monthly_Expenses_Aggregate;
  /** fetch data from the table: "monthly_expenses" using primary key columns */
  monthly_expenses_by_pk?: Maybe<Monthly_Expenses>;
  /** fetch data from the table in a streaming manner: "monthly_expenses" */
  monthly_expenses_stream: Array<Monthly_Expenses>;
  /** fetch data from the table: "payments" */
  payments: Array<Payments>;
  /** fetch aggregated fields from the table: "payments" */
  payments_aggregate: Payments_Aggregate;
  /** fetch data from the table: "payments" using primary key columns */
  payments_by_pk?: Maybe<Payments>;
  /** fetch data from the table in a streaming manner: "payments" */
  payments_stream: Array<Payments>;
  /** fetch data from the table: "reminders" */
  reminders: Array<Reminders>;
  /** fetch aggregated fields from the table: "reminders" */
  reminders_aggregate: Reminders_Aggregate;
  /** fetch data from the table: "reminders" using primary key columns */
  reminders_by_pk?: Maybe<Reminders>;
  /** fetch data from the table in a streaming manner: "reminders" */
  reminders_stream: Array<Reminders>;
  /** fetch data from the table: "rooms" */
  rooms: Array<Rooms>;
  /** fetch aggregated fields from the table: "rooms" */
  rooms_aggregate: Rooms_Aggregate;
  /** fetch data from the table: "rooms" using primary key columns */
  rooms_by_pk?: Maybe<Rooms>;
  /** fetch data from the table in a streaming manner: "rooms" */
  rooms_stream: Array<Rooms>;
  /** fetch data from the table: "tenants" */
  tenants: Array<Tenants>;
  /** fetch aggregated fields from the table: "tenants" */
  tenants_aggregate: Tenants_Aggregate;
  /** fetch data from the table: "tenants" using primary key columns */
  tenants_by_pk?: Maybe<Tenants>;
  /** fetch data from the table in a streaming manner: "tenants" */
  tenants_stream: Array<Tenants>;
};


export type Subscription_RootContractsArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contracts_Order_By>>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};


export type Subscription_RootContracts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contracts_Order_By>>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};


export type Subscription_RootContracts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootContracts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Contracts_Stream_Cursor_Input>>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};


export type Subscription_RootElectricityArgs = {
  distinct_on?: InputMaybe<Array<Electricity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Electricity_Order_By>>;
  where?: InputMaybe<Electricity_Bool_Exp>;
};


export type Subscription_RootElectricity_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Electricity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Electricity_Order_By>>;
  where?: InputMaybe<Electricity_Bool_Exp>;
};


export type Subscription_RootElectricity_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootElectricity_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Electricity_Stream_Cursor_Input>>;
  where?: InputMaybe<Electricity_Bool_Exp>;
};


export type Subscription_RootExpensesArgs = {
  distinct_on?: InputMaybe<Array<Expenses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Expenses_Order_By>>;
  where?: InputMaybe<Expenses_Bool_Exp>;
};


export type Subscription_RootExpenses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Expenses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Expenses_Order_By>>;
  where?: InputMaybe<Expenses_Bool_Exp>;
};


export type Subscription_RootExpenses_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootExpenses_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Expenses_Stream_Cursor_Input>>;
  where?: InputMaybe<Expenses_Bool_Exp>;
};


export type Subscription_RootHousesArgs = {
  distinct_on?: InputMaybe<Array<Houses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Houses_Order_By>>;
  where?: InputMaybe<Houses_Bool_Exp>;
};


export type Subscription_RootHouses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Houses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Houses_Order_By>>;
  where?: InputMaybe<Houses_Bool_Exp>;
};


export type Subscription_RootHouses_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootHouses_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Houses_Stream_Cursor_Input>>;
  where?: InputMaybe<Houses_Bool_Exp>;
};


export type Subscription_RootLandlordsArgs = {
  distinct_on?: InputMaybe<Array<Landlords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Landlords_Order_By>>;
  where?: InputMaybe<Landlords_Bool_Exp>;
};


export type Subscription_RootLandlords_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Landlords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Landlords_Order_By>>;
  where?: InputMaybe<Landlords_Bool_Exp>;
};


export type Subscription_RootLandlords_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootLandlords_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Landlords_Stream_Cursor_Input>>;
  where?: InputMaybe<Landlords_Bool_Exp>;
};


export type Subscription_RootMonthly_ExpensesArgs = {
  distinct_on?: InputMaybe<Array<Monthly_Expenses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Monthly_Expenses_Order_By>>;
  where?: InputMaybe<Monthly_Expenses_Bool_Exp>;
};


export type Subscription_RootMonthly_Expenses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Monthly_Expenses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Monthly_Expenses_Order_By>>;
  where?: InputMaybe<Monthly_Expenses_Bool_Exp>;
};


export type Subscription_RootMonthly_Expenses_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMonthly_Expenses_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Monthly_Expenses_Stream_Cursor_Input>>;
  where?: InputMaybe<Monthly_Expenses_Bool_Exp>;
};


export type Subscription_RootPaymentsArgs = {
  distinct_on?: InputMaybe<Array<Payments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payments_Order_By>>;
  where?: InputMaybe<Payments_Bool_Exp>;
};


export type Subscription_RootPayments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payments_Order_By>>;
  where?: InputMaybe<Payments_Bool_Exp>;
};


export type Subscription_RootPayments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPayments_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Payments_Stream_Cursor_Input>>;
  where?: InputMaybe<Payments_Bool_Exp>;
};


export type Subscription_RootRemindersArgs = {
  distinct_on?: InputMaybe<Array<Reminders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reminders_Order_By>>;
  where?: InputMaybe<Reminders_Bool_Exp>;
};


export type Subscription_RootReminders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reminders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Reminders_Order_By>>;
  where?: InputMaybe<Reminders_Bool_Exp>;
};


export type Subscription_RootReminders_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootReminders_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Reminders_Stream_Cursor_Input>>;
  where?: InputMaybe<Reminders_Bool_Exp>;
};


export type Subscription_RootRoomsArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rooms_Order_By>>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};


export type Subscription_RootRooms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rooms_Order_By>>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};


export type Subscription_RootRooms_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRooms_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Rooms_Stream_Cursor_Input>>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};


export type Subscription_RootTenantsArgs = {
  distinct_on?: InputMaybe<Array<Tenants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tenants_Order_By>>;
  where?: InputMaybe<Tenants_Bool_Exp>;
};


export type Subscription_RootTenants_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tenants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tenants_Order_By>>;
  where?: InputMaybe<Tenants_Bool_Exp>;
};


export type Subscription_RootTenants_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootTenants_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Tenants_Stream_Cursor_Input>>;
  where?: InputMaybe<Tenants_Bool_Exp>;
};

/** columns and relationships of "tenants" */
export type Tenants = {
  contact_number?: Maybe<Scalars['String']['output']>;
  entered_date?: Maybe<Scalars['date']['output']>;
  id: Scalars['uuid']['output'];
  name?: Maybe<Scalars['String']['output']>;
  room_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "tenants" */
export type Tenants_Aggregate = {
  aggregate?: Maybe<Tenants_Aggregate_Fields>;
  nodes: Array<Tenants>;
};

/** aggregate fields of "tenants" */
export type Tenants_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Tenants_Max_Fields>;
  min?: Maybe<Tenants_Min_Fields>;
};


/** aggregate fields of "tenants" */
export type Tenants_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tenants_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "tenants". All fields are combined with a logical 'AND'. */
export type Tenants_Bool_Exp = {
  _and?: InputMaybe<Array<Tenants_Bool_Exp>>;
  _not?: InputMaybe<Tenants_Bool_Exp>;
  _or?: InputMaybe<Array<Tenants_Bool_Exp>>;
  contact_number?: InputMaybe<String_Comparison_Exp>;
  entered_date?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  room_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "tenants" */
export type Tenants_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'tenants_pkey';

/** input type for inserting data into table "tenants" */
export type Tenants_Insert_Input = {
  contact_number?: InputMaybe<Scalars['String']['input']>;
  entered_date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  room_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Tenants_Max_Fields = {
  contact_number?: Maybe<Scalars['String']['output']>;
  entered_date?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  room_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Tenants_Min_Fields = {
  contact_number?: Maybe<Scalars['String']['output']>;
  entered_date?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  room_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "tenants" */
export type Tenants_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Tenants>;
};

/** on_conflict condition type for table "tenants" */
export type Tenants_On_Conflict = {
  constraint: Tenants_Constraint;
  update_columns?: Array<Tenants_Update_Column>;
  where?: InputMaybe<Tenants_Bool_Exp>;
};

/** Ordering options when selecting data from "tenants". */
export type Tenants_Order_By = {
  contact_number?: InputMaybe<Order_By>;
  entered_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  room_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tenants */
export type Tenants_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "tenants" */
export type Tenants_Select_Column =
  /** column name */
  | 'contact_number'
  /** column name */
  | 'entered_date'
  /** column name */
  | 'id'
  /** column name */
  | 'name'
  /** column name */
  | 'room_id';

/** input type for updating data in table "tenants" */
export type Tenants_Set_Input = {
  contact_number?: InputMaybe<Scalars['String']['input']>;
  entered_date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  room_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "tenants" */
export type Tenants_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tenants_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tenants_Stream_Cursor_Value_Input = {
  contact_number?: InputMaybe<Scalars['String']['input']>;
  entered_date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  room_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "tenants" */
export type Tenants_Update_Column =
  /** column name */
  | 'contact_number'
  /** column name */
  | 'entered_date'
  /** column name */
  | 'id'
  /** column name */
  | 'name'
  /** column name */
  | 'room_id';

export type Tenants_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tenants_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tenants_Bool_Exp;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};
