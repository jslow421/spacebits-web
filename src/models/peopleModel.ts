export class PeopleInSpaceModel {
    updatedTime: string | undefined;
    people: PersonInSpace[] | undefined;
}

export class PersonInSpace {
    name: string | undefined;
    craft: string | undefined;
}
