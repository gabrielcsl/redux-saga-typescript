

import { all, call, put, takeLatest } from 'redux-saga/effects'

import { fetchPostsFailure, fetchPostsSuccess } from '../../actions/postsActions/postsActions'
import { postTypes } from '../../actionsTypes/postsTypes'
import * as service from '../../service/postsService/postsService'

function* fetchPostsSaga() {
    try {
      const response = yield call(service.getPosts);
      yield put(
        fetchPostsSuccess({
          posts: response.data
        })
      );
    } catch (e) {
      yield put(
        fetchPostsFailure({
          error: e.message
        })
      );
    }
  }

  function* postsSaga() {
    yield all([takeLatest(postTypes.FETCH_POST_REQUEST, fetchPostsSaga)]);
  }
  
  export default postsSaga;