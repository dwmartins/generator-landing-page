import { ACCEPT_ICONS_TO_MESSAGE, ACCEPT_IMAGES_TO_MESSAGE, MAX_ICO_SIZE, MAX_IMG_SIZE, MIN_PASSWORD_LENGTH } from "@/helpers/constants";

// Paths to public pages
export const PUBLIC_PATH_LISTINGS = "/listings";
export const PUBLIC_PATH_EVENTS = "/events";
export const PUBLIC_PATH_BLOG = "/blog";
export const PUBLIC_PATH_CONTACT = "/contact";
export const PUBLIC_PATH_LOGIN = "/login";
export const PUBLIC_PATH_REGISTER = "/register";
export const PUBLIC_PATH_PLANS = "/planos";
export const PUBLIC_PATH_FORGOT_PASSWORD = "/recover-password";
export const PUBLIC_PATH_USER_PANEL = "/user/panel";
export const PUBLIC_PATH_USER_PROFILE = "/user/profile";
export const PUBLIC_PATH_PAGE_NOT_FOUND = "/page-not-found";
export const PUBLIC_PATH_MAINTENANCE = "/maintenance";
export const PUBLIC_PATH_PRIVACY = "/privacy";
export const PUBLIC_PATH_RESET_PASSWORD = "/redefinir-senha";
export const PUBLIC_PATH_INVALID_OR_EXPIRED_LINK = "/invalid-link";

// path to admin pages
export const ADMIN_PATH_LOGIN = "/app/login";
export const ADMIN_PATH_DASHBOARD = "/app";
export const ADMIN_PATH_BASIC_SETTINGS = "basic-settings";
export const ADMIN_PATH_EMAIL_SETTINGS = "email-settings";

// Navigation page names
export const NAV_NAME_HOME = "Home";
export const NAV_NAME_LISTINGS = "Listings";
export const NAV_NAME_EVENTS = "Events";
export const NAV_NAME_BLOG = "Blog";
export const NAV_NAME_CONTACT = "Contact";
export const NAV_NAME_LOGIN = "Login";
export const NAV_NAME_PLANS = "Plans";
export const NAV_NAME_LOGOUT = "Logout";
export const NAV_NAME_PANEL = "Panel";
export const NAV_NAME_PROFILE = "Profile";
export const NAV_NAME_PRIVACY = "Privacy Policy";
export const NAV_NAME_APP_DASHBOARD = "Dashboard";
export const NAV_NAME_APP_CONTENTES = "Contents";
export const NAV_NAME_APP_SETTINGS = "Settings";
export const NAV_NAME_APP_BASIC_SETTINGS = "Basic settings";
export const NAV_NAME_APP_GENERAL_SETTINGS = "General settings";
export const NAV_NAME_APP_EMAIL_SETTINGS = "Email Settings";
export const NAV_NAME_APP_CSS_EDITOR = "CSS Editor";
export const NAV_NAME_APP_USERS = "Users";

// SEO titles
export const SEO_TITLE_MAINTENANCE = "Maintenance";
export const SEO_TITLE_REGISTER = "Create account";
export const SEO_TITLE_USER_PANEL = "User Panel";
export const SEO_TITLE_USER_PROFILE = "User profile";
export const SEO_TITLE_ADMIN_PANEL = "Panel";

// Titles 
export const NAVIGATION_TITLE = "Navigation";
export const SOCIAL_MEDIA_TITLE = "Social media";
export const LOGIN_TITLE = "Login";
export const PANEL_PAGE_TITLE = "Panel";
export const CREATE_ACCOUNT_TITLE = "Create an account";
export const PERSONAL_INFO_TITLE = "Personal information";
export const ADDRESS_TITLE_TITLE = "Address";
export const PASSWORD_TITLE = "Password";
export const SETTINGS_TITLE = "Settings";
export const DELETE_ACCOUNT = "Delete account";

// Form labels 
export const LABEL_EMAIL = "Email";
export const LABEL_PASSWORD = "Password";
export const LABEL_NAME = "Name";
export const LABEL_LAST_NAME = "Last name";
export const LABEL_DATE_OF_BIRTH = "Date of birth";
export const LABEL_PHONE = "Phone";
export const LABEL_USER_DESCRIPTION = "Description";
export const LABEL_ADDRESS = "Endereço";
export const LABEL_COMPLEMENT = "Complement";
export const LABEL_CITY = "City";
export const LABEL_ZIP_CODE = "Zip Code";
export const LABEL_STATE = "State";
export const LABEL_COUNTRY = "Country";
export const LABEL_CURRENT_PASSWORD = "Current password";
export const LABEL_NEW_PASSWORD = "New password";
export const LABEL_CONFIRM_PASSWORD = "Confirm password";
export const LABEL_SITE_INFO_NAME = "Website name";
export const LABEL_OLD_TWITTER = "Old Twitter";
export const LABEL_SITE_INFO_EMAIL = "Email";
export const LABEL_SITE_INFO_PHONE = "Phone";
export const LABEL_SITE_INFO_CITY = "City";
export const LABEL_SITE_INFO_STATE = "State";
export const LABEL_SITE_INFO_ADDRESS = "Address";
export const LABEL_SITE_INFO_INSTAGRAM = "Instagram";
export const LABEL_SITE_INFO_FACEBOOK = "Facebook";
export const LABEL_SITE_INFO_X = "X";
export const LABEL_SITE_INFO_DESCRIPTION = "Description";
export const LABEL_SITE_INFO_KEYWORDS = "Keywords";
export const LABEL_EMAIL_SETTINGS_SERVER = "Server";
export const LABEL_EMAIL_SETTINGS_PORT = "Port";
export const LABEL_EMAIL_SETTINGS_AUTHENTICATION = "Authentication";
export const LABEL_EMAIL_SETTINGS_EMAIL_ADDRESS = "Email address";
export const LABEL_EMAIL_SETTINGS_USERNAME_EMAIL = "Username/Email";
export const LABEL_EMAIL_SETTINGS_LABEL_PASSWORD = "Password";

export const FATAL_ERROR_MESSAGE = "Oops, an error occurred, please try again.";
export const ILLUSTRATION_CREDIT_TEXT = "Illustrations by";
export const DEVELOPER_CREDIT_TEXT = "Developed by";
export const BUTTON_ADVERTISE_HERE  = "Advertise here";
export const REMEMBER_ME = "Remember me";
export const FORGOT_MY_PASSWORD = "I forgot my password";
export const BUTTON_ENTER = "Enter";
export const DONT_HAVE_ACCOUNT = "Don't have an account?";
export const CREATE_MY_ACCOUNT = "Create my account";
export const LOGIN_SUCCESS_MESSAGE = "Login successful.";
export const FILL_REQUIRED_FIELDS_MESSAGE = "Please fill in all required fields.";
export const BTN_TEXT_SAVE = "Save";
export const BTN_TEXT_CANCEL = "Cancel";
export const BTN_TEXT_LOADING = "Wait";
export const NOT_LOGGED = "Your session has expired or you are not logged in. Please log in again to continue.";
export const LOGOUT_MESSAGE = "You have been successfully logged out. See you next time!";
export const USER_ALREADY_LOGGED = "You are already logged in.";
export const PAGE_NOT_FOUND_MESSAGE = "Oops, we couldn't find that page";
export const BUTTON_BACK_TO_HOME_PAGE = "Back to home page";
export const ACCESS_DENIED_MESSAGE = "Access denied, you do not have permission to access this area.";
export const MAINTENANCE_ALERT = "We are undergoing maintenance, we will be back soon";
export const ARE_YOU_AN_ADMIN = "Are you an administrator?";
export const PRIVACY_MESSAGE = "By signing up, you agree to our";
export const HAVE_ACCOUNT_MESSAGE = "Already have an account?";
export const BTN_TEXT_CREATE_ACCOUNT = "Create account";
export const PASSWORD_MIN_LENGTH_REQUIREMENT = `The password must contain at least ${MIN_PASSWORD_LENGTH} characters.`;
export const FIELD_EMPTY_MESSAGE = "Field ({field}) is required";
export const EMAIL_INVALID_MESSAGE = "Please enter a valid email address.";
export const INVALID_FIELDS_TITLE_MESSAGE = "Invalid Fields";
export const FIELD_INVALID_CHARACTER = "The field ({field}) contains invalid characters";
export const MEMBER_SINCE = "Member since";
export const EDIT_PROFILE = "Edit profile";
export const GOOD_MORNING = "Good morning";
export const GOOD_AFTERNOON = "Good afternoon";
export const GOODNIGHT = "goodnight";
export const WELCOME_TO_YOU_AREA = "Welcome to your user area! Here you can manage your ads and view personal information. Have full control over the content you share and keep your data up to date.";
export const DONT_HAVE_ADS_MESSAGE = "It looks like you don't have any ads on our site.";
export const ADVERTISE_NOW = "Advertise now";
export const MANAGE_PERSONAL_HERE = "Manage your Personal info and settings here.";
export const BASIC_INFORMATION = "Basic information";
export const UPDATE = "Update";
export const BUTTON_SAVE_CHANGES = "Salvar alterações";
export const FIELD_INVALID_NUMERIC_MESSAGE = "The field ({field}) must contain a valid numeric value.";
export const PASSWORD_NOT_MATCH_MESSAGE = "Passwords do not match";
export const AGREE_RECEIVE_MAIL = "I agree to receive informational and promotional emails.";
export const CONTACT_PUBLIC = "Make my contact details public.";
export const DELETE_ACCOUNT_TEXT = "If you delete your account, you will lose all your data and items linked to your account.";
export const ACTION_CANNOT_UNDONE = "This action cannot be undone";
export const CONFIRM_DELETE_ACCOUNT = "I confirm that I would like to delete my account";
export const BUTTON_DELETE_ACCOUNT = "Delete account";
export const ALERT_DELETE_ACCOUNT = "You need to confirm that you really want to delete your account";
export const IMG_MAX_SIZE_MESSAGE = `The image must be a maximum of ${MAX_IMG_SIZE}MB.`;
export const UNSUPPORTED_IMG_MESSAGE = `The file must be an image in the allowed formats: ${ACCEPT_IMAGES_TO_MESSAGE}`;
export const ICON_MAX_SIZE_MESSAGE = `The icon must be a maximum of ${MAX_ICO_SIZE}MB.`;
export const UNSUPPORTED_ICON_MESSAGE = `The file must be an ico in the allowed formats: ${ACCEPT_ICONS_TO_MESSAGE}.`;
export const STORYSET = "Storyset";
export const PLACEHOLDER_USER_DESCRIPTION = "Enter a brief description of yourself.";
export const FORGOT_YOUR_PASSWORD = "Forgot your password?";
export const ENTER_YOUR_EMAIL = "Enter your email and we'll send you a reset link.";
export const BTN_SEND_RESET_LINK = "Send reset link";
export const PLACEHOLDER_EMAIL_ADDRESS = "Email address";
export const BTN_SET_PASSWORD = "Set password";
export const PLACEHOLDER_NEW_PASSWORD = "New password";
export const PLACEHOLDER_CONFIRM_NEW_PASSWORD = "Confirm your password";
export const RETURN_TO_HOME_PAGE = "Return to home page";
export const INVALID_OR_EXPIRED_LINK = "invalid or expired ink.";
export const TOKEN_NOT_PROVIDED = "Token not provided.";
export const BTN_SEND_NEW_LINK = "Enviar novo link";
export const SITE_UNDER_MAINTENANCE = "Site under maintenance";
export const BTN_TEXT_PUBLISH = "Publish";
export const DASHBOARD = "Dashboard";
export const BTN_TEXT_SITE = "SITE";
export const VISUAL_IDENTITY = "Visual identity";
export const CHOOSE_YOUR_LOGO_IMAGE = "Choose your logo image";
export const FORMAT_IMAGE = "Maximum size 5 MB, (JPG, JPEG or PNG.)";
export const CHOOSE_FILE = "Choose file";
export const BTN_CANCEL = "Cancel";
export const CHOOSE_YOUR_COVER_IMAGE = "Choose cover image";
export const CHOOSE_YOUR_ICON = "Choose a favicon for your site";
export const FORMAT_ICON = "FaviconS are small 16 x 16 pixel images associated with a website, usually displayed in the browser's address bar and favorites list.";
export const CHOOSE_YOUR_DEFAULT_IMAGE = "Choose a default image";
export const DEFAULT_IMAGE_MESSAGE = "This image will be used for content that does not have images.";
export const NO_FILES_SELECTED = "No files selected";
export const BASIC_INFO_TITLE = "Basic Information";
export const EMAIL_SETTINGS_TITLE = "SMTP Server Properties";
export const EMAIL_SETTINGS_ACTIVE = "Active";
export const EMAIL_SETTINGS_INACTIVE = "Inactive";
export const SEARCHING_FOR_EMAIL_SETTINGS = "Searching for email settings..."