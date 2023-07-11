export default function inputFile() {
    document.querySelector("html").classList.add('js');

    let fileInput = document.querySelector(".cLista"),
        fileInput2 = document.querySelector(".cLista2")

    const listaArquivos = (lista, input) => {
        let arquivos = input.files
        const listaArquivos = Array.from(arquivos)
        listaArquivos.forEach((item) => {
            const elemento = document.createElement('p')
            elemento.innerHTML = item.name
            document.querySelector(`.${lista}`).appendChild(elemento)
        })
    }
    if (fileInput) {
        fileInput.addEventListener("change", function (e) {
            listaArquivos("listaDeArquivos", fileInput)
        });

        fileInput2.addEventListener("change", function (e) {
            listaArquivos("listaDeArquivos2", fileInput2)
        });
    }
}
