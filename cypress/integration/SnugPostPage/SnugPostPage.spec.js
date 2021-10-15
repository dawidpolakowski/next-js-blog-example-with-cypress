import { should } from 'chai'
import singlePost from '../PageObjects/SinglePost.js'

When('I navigate to a {string} post page', (type) => {

    if(type=="tight"){
        singlePost.clickTightPostLink()
    }
    if(type=="snug"){
        singlePost.clickSnugPostLink()
    }
}) 
      
