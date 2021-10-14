import { should } from 'chai'
import singlePost from '../PageObjects/SinglePost.js'

When('I navigate to a tight post page', () => {

    singlePost.clickTightPostLink()
})       