import {NextResponse} from "next/server";
import {db} from "@/firebaseconfig";
import {get, ref} from "firebase/database";
import {Data} from "@/globalstate";

export async function GET(req: any, {params}: {params: {postName: string}}) {
  const {postName} = params;
  const dbRef = ref(db, `posts/${postName.toLowerCase().replaceAll(" ", "-")}`);
  try {
    const snapshot = await get(dbRef);
    const response: Data[] = snapshot.val();
    if (!response) return NextResponse.json({response: []});

    return NextResponse.json({response: response});
  } catch (error) {
    return NextResponse.json({error});
  }
}
