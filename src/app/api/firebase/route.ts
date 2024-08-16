import {db} from "../../../firebaseconfig";
import {ref, get} from "firebase/database";
import {NextResponse} from "next/server"; // Importiere die NextResponse, um die Antwort zurückzugeben
import {Data} from "@/globalstate"; // Angenommen, dies ist dein Typ

export const dynamic = "force-dynamic";

export async function GET() {
  const dataBaseRef = ref(db, "posts");

  try {
    const snapshot = await get(dataBaseRef); // Abrufen der neuesten Daten
    const response: Data[] = snapshot.val();

    if (!response) return NextResponse.json({response: []});

    const filteredItems: Data[] = Object.values(response);
    return NextResponse.json({response: filteredItems});
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({error});
  }
}
