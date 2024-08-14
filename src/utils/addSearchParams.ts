import {
  resultsUrlWithParams,
  type TaggedPersonProps,
} from "@stores/store";

export function addSearchParams(
  route: string,
  taggedPeopleArr: TaggedPersonProps[]
) {
  const add_params: { [key: string]: string } = {};

  taggedPeopleArr.map((taggedPerson: TaggedPersonProps, index: number) => {
    add_params[`person-${index + 1}`] = taggedPerson.id.toString();
  });

  resultsUrlWithParams.set(
    `${route}?${new URLSearchParams([...Object.entries(add_params)])}`
  );
}
