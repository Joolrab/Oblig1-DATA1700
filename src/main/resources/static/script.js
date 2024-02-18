
    const billetter= [];

    function validerOgRegistrerBillett(){
        const film = document.getElementById('film');
        const valgtFilm = film.options[film.selectedIndex].text;
        const antall = document.getElementById('antall').value;
        const fornavn = document.getElementById('fornavn').value;
        const etternavn = document.getElementById('etternavn').value;
        const telefonnr = document.getElementById('telefonnr').value;
        const epost = document.getElementById('epost').value;

        const billett = {
            film : valgtFilm,
            antall : antall,
            fornavn : fornavn,
            etternavn : etternavn,
            telefonnr : telefonnr,
            epost : epost
        };

        if (valgtFilm === "Velg film her") {
            document.getElementById("feilFilm").innerHTML="Må velge film";
        }

        if (antall === "") {
            document.getElementById("feilAntall").innerHTML="Må skrive inn antall";
        }

        if (fornavn === "") {
            document.getElementById("feilFornavn").innerHTML="Må skrive inn fornavn";
        }

        if (etternavn === "") {
            document.getElementById("feilEtternavn").innerHTML="Må skrive inn etternavn";
        }

        if (telefonnr === "") {
            document.getElementById("feilTelefonnr").innerHTML="Må skrive inn telefonnr";
        }

        if (epost === "") {
            document.getElementById("feilEpost").innerHTML="Må skrive inn epost";
        }

        if (antall !== "" && fornavn !== "" && etternavn !== "" && telefonnr !== "" && epost !== "" && valgtFilm !== "Velg film her") {
            billetter.push(billett);
            document.getElementById("feilFilm").innerHTML="";
            document.getElementById("feilAntall").innerHTML="";
            document.getElementById("feilFornavn").innerHTML="";
            document.getElementById("feilEtternavn").innerHTML="";
            document.getElementById("feilTelefonnr").innerHTML="";
            document.getElementById("feilEpost").innerHTML="";
        }

        // nullstill inputboksene
        document.getElementById("film").selected=false;
        document.getElementById("antall").value="";
        document.getElementById("fornavn").value="";
        document.getElementById("etternavn").value="";
        document.getElementById("telefonnr").value="";
        document.getElementById("epost").value="";

        visBilletter()
    }
    function visBilletter() {
        // skriv ut billetter
        let ut = "<table><tr>" +
            "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
            "</tr>";
        for (let b of billetter){
            ut+="<tr>";
            ut+="<td>"+b.film+"</td><td>"+b.antall+"</td><td>"+b.fornavn+"</td><td>"+b.etternavn+"</td><td>"+b.telefonnr+"</td><td>"+b.epost+"</td>";
            ut+="</tr>";
        }
        document.getElementById("billettListe").innerHTML=ut;
    }
    function slettBilletter() {
        billetter.length = 0;
        document.getElementById("billettListe").innerHTML="";
    }