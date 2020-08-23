import { Lcommande } from '../model/lcommande';
export class Commande {
    id :number;
    annee : number;
    numero : number;
    date_comm : any;
    code_client : number;
    libelle : String;
    lib_client : String;
    avance : number;
    totht : number;
    tottva : number;
    totttc : number;
    lcomms :Array<Lcommande> =[];
}
 