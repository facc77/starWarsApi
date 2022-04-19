const datos = { resp: null, error: null };
let urlBase = process.env.REACT_APP_BASE_URL;

export const getCompleteList = async (endpoint) => {
  let list = [];
  let url = `${urlBase}/${endpoint}/?page=1`;
  while (url) {
    let nextres = await fetch(url);
    let datos = await nextres.json();
    const { next, results } = datos;
    url = next;
    list = [...list, ...results];
  }
  datos.resp = list;
  datos.next = url;
  return datos;
};

export const getPage = async (endpoint, page) => {
  let url = `${urlBase}/${endpoint}/?page=${page}`;

  const resp = await fetch(url);
  if (resp.ok) {
    datos.resp = await resp.json();
    datos.next = datos.resp.next;
  } else {
    datos.error = resp;
  }
  return datos;
};

export const getUrlId = (url) => {
  return url.replace(/[^0-9]/g, "");
};
