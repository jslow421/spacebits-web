export class Features {
	static readonly isNeoEnabled = true;
	static readonly isUpcomingLaunchesEnabled = false;

	static readonly available = {
		neo: "neo",
		upcomingLaunches: "upcomingLaunches",
	};

	static isEnabled(feature: string): boolean {
		if (process.env.NODE_ENV === "development") {
			return true;
		}

		switch (feature) {
			case this.available.neo:
				return Features.isNeoEnabled;
			case this.available.upcomingLaunches:
				return Features.isUpcomingLaunchesEnabled;
			default:
				return false;
		}
	}
}
