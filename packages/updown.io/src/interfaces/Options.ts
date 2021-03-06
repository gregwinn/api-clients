export interface ClientOptions {
  apiKey: string;
  apiUrl?: string;
}

export interface CustomHeaders {
  [key: string]: string | number | boolean;
}

export type HttpMethod = 'delete' | 'get' | 'post' | 'put';

type MetricsGroup = 'time' | 'host';

export interface RequestOptions {
  alias?: string;
  apdex_t?: number;
  'api-key'?: string;
  custom_headers?: CustomHeaders;
  disabled_locations?: string[];
  enabled?: boolean;
  from?: string;
  group?: MetricsGroup;
  metrics?: boolean;
  mute_until?: string;
  page?: number;
  period?: number;
  published?: boolean;
  string_match?: string;
  to?: string;
  url?: string;
}

export interface MetricsOptions {
  /** Start time, default to 1 month ago */
  from?: string;
  /** Group data by 'time' (hour) or 'host' (location) */
  group: MetricsGroup;
  /** End time, default to now */
  to?: string;
}

export interface CheckOptions {
  /** Human readable name */
  alias?: string;
  /** APDEX threshold in seconds (0.125, 0.25, 0.5, 1.0 or 2.0) */
  apdex_t?: number;
  /** The HTTP headers you want in updown requests. Ex: custom_headers[X-Api-Key]=xxxxxxxxx */
  customHeaders?: CustomHeaders;
  /** Disabled monitoring locations. It's an array of abbreviated location names. Can be any of these: ["lan", "mia", "bhs", "gra", "fra", "sin", "tok", "syd"]. Ex: disabled_locations[]=lan&disabled_locations[]=syd */
  disabledLocations?: string[];
  /** Is the check enabled (true or false) */
  enabled?: boolean;
  /** Mute notifications until given time, accepts a time, 'recovery' or 'forever' */
  mute_until?: string;
  /** Interval in seconds (15, 30, 60, 120, 300, 600, 1800 or 3600) */
  period?: number;
  /** Shall the status page be public (true or false) */
  published?: boolean;
  /** Search for this string in the page */
  string_match?: string;
}
