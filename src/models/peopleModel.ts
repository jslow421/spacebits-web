export class PeopleInSpaceModel {
	update_date: string | undefined;
	people: PersonInSpace[] | undefined;
}

export class PersonInSpace {
	name: string | undefined;
	craft: string | undefined;
}
