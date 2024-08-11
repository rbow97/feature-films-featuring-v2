import {
  resultsUrlWithParams,
  type TaggedPersonProps,
} from "@stores/newSystem";

export function addSearchParams(taggedPeopleArr: TaggedPersonProps[]) {
  const add_params: { [key: string]: string } = {};

  taggedPeopleArr.map((taggedPerson: TaggedPersonProps, index: number) => {
    add_params[`person-${index + 1}`] = taggedPerson.id.toString();
  });

  resultsUrlWithParams.set(
    `/results?${new URLSearchParams([...Object.entries(add_params)])}`
  );
}
