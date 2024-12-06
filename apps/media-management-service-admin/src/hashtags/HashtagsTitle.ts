import { Hashtags as THashtags } from "../api/hashtags/Hashtags";

export const HASHTAGS_TITLE_FIELD = "hashtag";

export const HashtagsTitle = (record: THashtags): string => {
  return record.hashtag?.toString() || String(record.id);
};
