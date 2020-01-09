import {
  GET_PIC,
  GET_PROF_PIC,
  LOAD_MORE,
  GET_PIC_BY_ID,
  HANDLE_SCROLL,
  GET_PIC_BY_ID_FOR_PREVIOUS_BUTTON
} from "../actionTypes";

const initialState = {
  pic: [],
  profImage: null,
  per: 12,
  page: 1,
  totalPages: null,
  imageObject: null,
  index1: null,
  index2: null,
  scrolling: false,
  indexPrev1: null,
  indexPrev2: null,
  imagePrev: null
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PIC: {
      return {
        ...state,
        pic: [...state.pic, action.payload.results],
        totalPages: action.payload.total_pages,
        scrolling: false
      };
    }
    case GET_PROF_PIC: {
      return {
        ...state,
        profImage: action.payload
      };
    }
    case LOAD_MORE: {
      return {
        ...state,
        page: state.page + 1,
        scrolling: true
      };
    }
    case GET_PIC_BY_ID: {
      window.history.pushState("title", "page", "/image/" + action.payload.id);
      return {
        ...state,
        imageObject: action.payload,
        index1: action.index1,
        index2: action.index2,
        indexPrev1:
          action.index1 - 1 === 0 ? state.pic.length - 1 : action.index1,
        indexPrev2:
          action.index2 - 1 === 0 ? state.pic[0].length - 1 : action.index2 - 2
      };
    }
    case HANDLE_SCROLL: {
      return {
        ...state
      };
    }
    case GET_PIC_BY_ID_FOR_PREVIOUS_BUTTON: {
      window.history.pushState("title", "page", "/image/" + action.payload.id);
      return {
        ...state,
        imageObject: action.payload,
        indexPrev1: action.indexPrev1,
        indexPrev2: action.indexPrev2
      };
    }
    default:
      return state;
  }
}
