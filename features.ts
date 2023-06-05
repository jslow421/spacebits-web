export class Features {
	static readonly isNeoEnabled = true;
	static readonly isUpcomingLaunchesEnabled = false;

	static readonly available = {
		neo: "neo",
		upcomingLaunches: "upcomingLaunches",
	};

	static isEnabled(feature: string): boolean {
		let isInDev = import.meta.env.DEV;

		if (isInDev) {
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
