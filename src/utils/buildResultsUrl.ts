import { resultsUrlWithParams } from "@stores/newSystem";

export function addSearchParams(idArray: any) {
  const add_params: any = {};

  idArray.map((id: number, index: number) => {
    add_params[`person-${index + 1}`] = id;
  });

  resultsUrlWithParams.set(
    `/results?${new URLSearchParams([...Object.entries(add_params)])}`
  );
}
