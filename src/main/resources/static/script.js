
   const billetter= [];
    function validerBillett() {

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

        if (antall < 1) {
            document.getElementById("feilAntall").innerHTML="Må skrive inn antall";
        }

        if (fornavn === "") {
            document.getElementById("feilFornavn").innerHTML="Må skrive inn fornavn";
        }

        if (etternavn === "") {
            document.getElementById("feilEtternavn").innerHTML="Må skrive inn etternavn";
        }

       const telefonRegex = /^\d{8}$/;
        if (!telefonRegex.test(telefonnr)) {
            document.getElementById("feilTelefonnr").innerHTML="Må skrive inn gyldig telefonnr";
        }

        const epostRegex = /^[^@]+@[^@]+$/;
        if (!epostRegex.test(epost)) {
            document.getElementById("feilEpost").innerHTML="Må skrive inn gyldig epost";
        }

        if (antall >= 1 && fornavn !== "" && etternavn !== "" && telefonRegex.test(telefonnr) && epostRegex.test(epost) && valgtFilm !== "Velg film her") {
            billetter.push(billett);
            document.getElementById("feilFilm").innerHTML="";
            document.getElementById("feilAntall").innerHTML="";
            document.getElementById("feilFornavn").innerHTML="";
            document.getElementById("feilEtternavn").innerHTML="";
            document.getElementById("feilTelefonnr").innerHTML="";
            document.getElementById("feilEpost").innerHTML="";
            visBilletter()

            // nullstill inputboksene
            document.getElementById("film").selected=false;
            document.getElementById("antall").value="";
            document.getElementById("fornavn").value="";
            document.getElementById("etternavn").value="";
            document.getElementById("telefonnr").value="";
            document.getElementById("epost").value="";
        }
    }

    function visBilletter() {
        // skriv ut billetter
        let utskrift = "<table><tr>" +
            "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
            "</tr>";
        for (let b of billetter){
            utskrift+="<tr>";
            utskrift+="<td>"+b.film+"</td><td>"+b.antall+"</td><td>"+b.fornavn+"</td><td>"+b.etternavn+"</td><td>"+b.telefonnr+"</td><td>"+b.epost+"</td>";
            utskrift+="</tr>";
        }
        document.getElementById("billettListe").innerHTML=utskrift;
    }

    function slettBilletter() {
        billetter.length = 0;
        document.getElementById("billettListe").innerHTML="";
    }