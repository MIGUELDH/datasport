


def extraer_noticias_bbc():
    # Hacer la solicitud GET a la página web de BBC News
    url = 'https://www.bbc.com/news'
    response = requests.get(url)

    # Verificar si la solicitud fue exitosa
    if response.status_code == 200:
        # Parsear el contenido HTML de la página
        soup = BeautifulSoup(response.text, 'html.parser')

        # Encontrar los elementos que contienen las noticias principales
        noticias = soup.find_all('div', class_='gs-c-promo-body gel-1/2@xs gel-1/1@m gel-1/3@xl')

        # Iterar sobre cada noticia para extraer el título y el enlace
        for noticia in noticias:
            titulo = noticia.find('h3', class_='gs-c-promo-heading__title gel-paragon-bold nw-o-link-split__text').text.strip()
            enlace = noticia.find('a')['href']
            print(f"Título: {titulo}")
            print(f"Enlace: {enlace}")
            print("---------------------------")
    else:
        print("Error al obtener la página:", response.status_code)

if __name__ == "__main__":
    extraer_noticias_bbc()
