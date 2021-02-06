import Cosmic from 'cosmicjs'
import config from '../config'
import axios from 'axios'

const api = Cosmic()
const bucket = api.bucket({
  slug: config.bucket.slug,
  read_key: config.bucket.read_key,
  write_key: config.bucket.write_key
})

function getGlobals() {
  const params = {
    type_slug: 'globals'
  }
  return bucket.getObjectsByType(params);
}


function getObject(slug) {
  const params = {
    slug: slug
  };
  return bucket.getObject(params);
}

function getObjects() {
  const params = {
  };
  return bucket.getObjects(params);
}

export default {
  getGlobals,
  getObject,
  getObjects
}