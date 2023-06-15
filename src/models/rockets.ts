export enum RocketType {
	Falcon9 = "Falcon 9",
	Ariane5 = "Ariane 5",
	Delta4Heavy = "Delta IV Heavy",
	Soyuz2 = "Soyuz-2",
	Generic = "Generic",
}

export function getImageForType(rocket: RocketType): string {
	if (!rocket) {
		return "/rockets/generic.jpg";
	}

	switch (rocket) {
		case RocketType.Falcon9:
			return "/rockets/falcon9.jpg";
		case RocketType.Ariane5:
			return "/rockets/ariane5.jpg";
		case RocketType.Delta4Heavy:
			return "/rockets/delta4heavy.jpg";
		case RocketType.Soyuz2:
			return "/rockets/soyuz2.jpg";
		default:
			return "/rockets/generic.jpg";
	}
}

export function getRocketType(rocketName: string): RocketType {
	if (!rocketName) {
		return RocketType.Generic;
	}

	switch (rocketName) {
		case "Falcon 9":
			return RocketType.Falcon9;
		case "Ariane 5":
			return RocketType.Ariane5;
		case "Delta IV Heavy":
			return RocketType.Delta4Heavy;
		case "Soyuz-2":
			return RocketType.Soyuz2;
		default:
			return RocketType.Falcon9;
	}
}
