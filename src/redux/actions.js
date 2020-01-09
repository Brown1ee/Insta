import Unsplash from "unsplash-js";
import {
  GET_PIC,
  GET_PROF_PIC,
  LOAD_MORE,
  GET_PIC_BY_ID,
  HANDLE_SCROLL,
  GET_PIC_BY_ID_FOR_PREVIOUS_BUTTON
} from "./actionTypes";
const unsplash = new Unsplash({
  accessKey: process.env.REACT_APP_ACCESS_KEY,
  secret: process.env.REACT_APP_SECRET
});

export function loadPic(per, page) {
  return dispatch => {
    return unsplash.search
      .photos("cities", page, per, { orientation: "squarish" })
      .then(res => res.json())
      .then(json => dispatch(getPic(json)));
  };
}
export const loadMore = (per, page) => {
  return dispatch => {
    dispatch({
      type: LOAD_MORE
    });
    dispatch(loadPic(per, page));
  };
};

export const getPic = json => ({
  type: GET_PIC,
  payload: json
});

export function loadProfImg() {
  return dispatch => {
    unsplash.search
      .photos("rain", 1, 1, { orientation: "squarish" })
      .then(res => res.json())
      .then(json => dispatch(getProfPic(json.results[0].urls.raw)));
  };
}

export const getProfPic = profPic => ({
  type: GET_PROF_PIC,
  payload: profPic
});

export const loadPreviousPicById = (id, pic) => {
  let indexPrev1, indexPrev2;
  for (let i = 0; i < pic.length; i++) {
    for (let j = 0; j < pic[i].length; j++) {
      if (pic[i][j].id === id) {
        indexPrev1 = i;
        indexPrev2 = j;
      }
    }
  }

  let picArray = pic[indexPrev1];
  if (picArray !== undefined) {
    if (0 < indexPrev1) {
      if (indexPrev2 > 0) {
        indexPrev2--;
      } else {
        indexPrev1--;
        indexPrev2 = picArray.length - 1;
      }
    } else {
      if (0 < indexPrev2) {
        indexPrev2--;
      } else {
        indexPrev1 = pic.length - 1;
        indexPrev2 = picArray.length - 1;
      }
    }
  }
  return dispatch => {
    unsplash.photos
      .getPhoto(id)
      .then(res => res.json())
      .then(json =>
        dispatch(getPicByIdForPreviousButton(json, indexPrev1, indexPrev2))
      );
  };
};

export const getPicByIdForPreviousButton = (
  imageObject,
  indexPrev1,
  indexPrev2
) => ({
  type: GET_PIC_BY_ID_FOR_PREVIOUS_BUTTON,
  payload: imageObject,
  indexPrev1,
  indexPrev2
});

export const loadPicById = (id, pic, someId) => {
  let index1, index2;
  for (let i = 0; i < pic.length; i++) {
    for (let j = 0; j < pic[i].length; j++) {
      if (pic[i][j].id === id) {
        index1 = i;
        index2 = j;
      }
    }
  }

  let picArray = pic[index1];
  if (picArray !== undefined) {
    if (pic.length > index1 + 1) {
      if (picArray.length > index2 + 1) {
        index2++;
      } else {
        index1++;
        index2 = 0;
      }
    } else {
      if (picArray.length > index2 + 1) {
        index2++;
      } else {
        index1 = 0;
        index2 = 0;
      }
    }
  }

  return dispatch => {
    unsplash.photos
      .getPhoto(id)
      .then(res => res.json())
      .then(json => dispatch(getPicById(json, index1, index2)));
  };
};

export const getPicById = (imageObject, index1, index2) => ({
  type: GET_PIC_BY_ID,
  payload: imageObject,
  index1,
  index2
});

export const handleScroll = (e, scrolling, totalPages, per, page) => {
  return dispatch => {
    dispatch({
      type: HANDLE_SCROLL,
      payload: e,
      scrolling,
      page
    });
    if (scrolling) return;
    if (totalPages <= page);
    const lastDiv = document.querySelector("div.select > div:last-child");
    const lastDivOffset = lastDiv.offsetTop + lastDiv.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;
    let bottomOffset = 20;
    if (pageOffset > lastDivOffset - bottomOffset) {
      dispatch(loadMore(per, page));
    }
  };
};
