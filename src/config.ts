export default class Config {
  public static SUBSCRIBER_API_URL = 'https://canecsamapm01test.azure-api.net/ems/subscribers';
  public static EVENTS_API_URL = 'https://canecsamapm01test.azure-api.net/ems/events';
  public static ALL_EVENT_NAMES_API_URL = 'https://canecsamapm01test.azure-api.net/ems/events/distinct/event';
  // tslint:disable-next-line
  public static SUBSCRIBED_EVENT_NAMES_API_URL = 'https://canecsamapm01test.azure-api.net/ems/events/distinct/subscriber';
  public static EVENT_REPLAY_API_URL = 'https://canecsamapm01test.azure-api.net/ems/event/retry';
  public static MULE_APP_STATUS_API_URL = 'https://canecsamapm01test.azure-api.net/support/';

}
