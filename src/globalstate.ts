import {proxy} from "valtio";

type globalStateType = {
  optionalImages: string[];
  htmlDescription: string;
  name: string;
  allImageNames: string[];
};

type FirebaseDataType = {
  id: string;
  name: string;
  description: string;
  mainImageUrl: string;
  additionalImageUrls: string[];
  categorie: string;
  allImageNames: string[];
};

const GLOBALSTATE: globalStateType = proxy({
  optionalImages: [],
  htmlDescription: "",
  name: "",
  allImageNames: [],
});
export {GLOBALSTATE};
export type {FirebaseDataType as Data};
