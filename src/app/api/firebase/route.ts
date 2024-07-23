import {db} from "../../../firebaseconfig";
import {ref, get} from "firebase/database";
import {NextResponse} from "next/server"; // Importiere die NextResponse, um die Antwort zurückzugeben
import {Data} from "@/globalstate"; // Angenommen, dies ist dein Typ

export async function GET() {
  const dataBaseRef = ref(db, "posts");

  try {
    const snapshot = await get(dataBaseRef); // Verwende get() anstelle von onValue für einen einmaligen Abruf
    const response: Data[] = snapshot.val();
    if (!response) return NextResponse.json({response: []});

    const filteredItems: Data[] = Object.values(response);
    return NextResponse.json({response: filteredItems});
  } catch (error) {
    return NextResponse.json({error});
  }
}
