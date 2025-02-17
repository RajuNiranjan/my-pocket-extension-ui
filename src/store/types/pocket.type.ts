export interface Pocket {
  _id: string;
  userId: string;
  title: string;
  description?: string;
  pocket_userName?: string;
  pocket_password?: string;
  images?: string[];
  sharedWith?: string[];
}

export interface PocketType {
  pocketItem: Pocket[];
  isPocketLoading: boolean;
  error: string | null;
  selectedPocketItemId: string | null;
  sharedPocketItem: Pocket[];
  selectedUserId: string | null;
}
