export const USER_CONST = {
  USERNAME_MIN_LENGTH: 3,
  USERNAME_MAX_LENGTH: 20,
  PASSWORD_MIN_LENGTH: 6,
  PASSWORD_MAX_LENGTH: 20,
  EMAIL_MIN_LENGTH: 5,
  EMAIL_MAX_LENGTH: 50,
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 50,
  PHONE_MIN_LENGTH: 10,
  PHONE_MAX_LENGTH: 15,
  AVATAR_MIN_LENGTH: 5,
  AVATAR_MAX_LENGTH: 100,
  AVATAR_URL_MIN_LENGTH: 5,
  AVATAR_URL_MAX_LENGTH: 100,
  AVATAR_MIME_TYPES: ['image/jpeg', 'image/png', 'image/gif'],
  AVATAR_SIZE_LIMIT: 5 * 1024 * 1024, // 5MB
  AVATAR_URL_REGEX: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i,
  USERNAME_REGEX: /^[a-zA-Z0-9._-]+$/,
  PASSWORD_REGEX: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, // At least one uppercase letter, one lowercase letter, one number, and at least 6 characters
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  NAME_REGEX: /^[a-zA-Z\s]+$/, // Only letters and spaces
  PHONE_REGEX: /^\+?[1-9]\d{1,14}$/, // E.164 format
};

export type TUserConst = typeof USER_CONST;
