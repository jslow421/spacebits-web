export class UpcomingLaunchModel {
	mission_name: string | undefined;
	launch_date_utc: string | undefined;
	launch_site: LaunchSite | undefined;
	rocket: Rocket | undefined;
}

export class LaunchSite {
	site_name_long: string | undefined;
}

export class Rocket {
	rocket_name: string | undefined;
}
