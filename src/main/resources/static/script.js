
    const billetter = [];
    const billettKjop = document.getElementById('kjop');
    const slettBilletter = document.getElementById('slettBilletter');

    function validerOgRegistrerBillett(){
        //const film = document.getElementById('film').value;
        const valgtFilm = filmer.options[filmer.selectedIndex].text;
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
        }

        // nullstill inputboksene
        document.getElementById("filmer").selected=false;
        document.getElementById("antall").value="";
        document.getElementById("fornavn").value="";
        document.getElementById("etternavn").value="";
        document.getElementById("telefonnr").value="";
        document.getElementById("epost").value="";

        visBilletter()
    }
    function slettBilletter() {
        billetter.length = 0;
        document.getElementById("billettListe").innerHTML="";
    }