import React from 'react';
import { shallow } from 'enzyme';
import Items from '../../components/items';


const defaultProps = {
    isImageDataFetched:{ },
    imageItems: [
        {
            "largeImageURL":"https://pixabay.com/get/ea35b60821f6093ed1584d05fb1d4f90e671e2d31cac104491f6c179a5edb3bd_1280.jpg",
            "webformatHeight":360,
            "webformatWidth":640,
            "likes":1650,
            "imageWidth":3840,
            "id":3077928,
            "user_id":2946451,
            "views":843330,
            "comments":160,
            "pageURL":"https://pixabay.com/en/fantasy-beautiful-dawn-sunset-sky-3077928/",
            "imageHeight":2160,
            "webformatURL":"https://pixabay.com/get/ea35b60821f6093ed1584d05fb1d4f90e671e2d31cac104491f6c179a5edb3bd_640.jpg",
            "type":"photo",
            "previewHeight":84,
            "tags":"fantasy, beautiful, dawn",
            "downloads":397267,
            "user":"peter_pyw",
            "favorites":1386,
            "imageSize":1925809,
            "previewWidth":150,
            "userImageURL":"https://cdn.pixabay.com/user/2018/01/12/08-06-25-409_250x250.jpg",
            "previewURL":"https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_150.jpg"
        },
        {
            "largeImageURL":"https://pixabay.com/get/e835b60d20f6093ed1584d05fb1d4f90e671e2d31cac104491f6c179a5edb3bd_1280.jpg",
            "webformatHeight":360,
            "webformatWidth":640,
            "likes":1127,
            "imageWidth":3456,
            "id":1072828,
            "user_id":1720744,
            "views":328025,
            "comments":117,
            "pageURL":"https://pixabay.com/en/green-park-season-nature-outdoor-1072828/",
            "imageHeight":1944,
            "webformatURL":"https://pixabay.com/get/e835b60d20f6093ed1584d05fb1d4f90e671e2d31cac104491f6c179a5edb3bd_640.jpg",
            "type":"photo",
            "previewHeight":84,
            "tags":"green, park, season",
            "downloads":152364,
            "user":"valiunic",
            "favorites":1117,
            "imageSize":4796428,
            "previewWidth":150,
            "userImageURL":"https://cdn.pixabay.com/user/2015/12/01/20-20-44-483_250x250.jpg",
            "previewURL":"https://cdn.pixabay.com/photo/2015/12/01/20/28/green-1072828_150.jpg"
        },
        {
            "largeImageURL":"https://pixabay.com/get/e833b90b28f1033ed1584d05fb1d4f90e671e2d31cac104491f6c179a5edb3bd_1280.jpg",
            "webformatHeight":426,
            "webformatWidth":640,
            "likes":1002,
            "imageWidth":3861,
            "id":1684052,
            "user_id":3007100,
            "views":260917,
            "comments":107,
            "pageURL":"https://pixabay.com/en/barley-field-wheat-harvest-sunrise-1684052/",
            "imageHeight":2574,
            "webformatURL":"https://pixabay.com/get/e833b90b28f1033ed1584d05fb1d4f90e671e2d31cac104491f6c179a5edb3bd_640.jpg",
            "type":"photo",
            "previewHeight":99,
            "tags":"barley field, wheat, harvest",
            "downloads":125931,
            "user":"kangbch",
            "favorites":967,
            "imageSize":1741835,
            "previewWidth":150,
            "userImageURL":"https://cdn.pixabay.com/user/2016/09/22/02-22-02-467_250x250.jpg",
            "previewURL":"https://cdn.pixabay.com/photo/2016/09/21/04/46/barley-field-1684052_150.jpg"
        },
        {
            "largeImageURL":"https://pixabay.com/get/eb35b90f28f3033ed1584d05fb1d4f90e671e2d31cac104491f6c179a5edb3bd_1280.jpg",
            "webformatHeight":426,
            "webformatWidth":640,
            "likes":753,
            "imageWidth":2000,
            "id":2080072,
            "user_id":12019,
            "views":245543,
            "comments":35,
            "pageURL":"https://pixabay.com/en/italy-sunrise-sky-clouds-beautiful-2080072/",
            "imageHeight":1333,
            "webformatURL":"https://pixabay.com/get/eb35b90f28f3033ed1584d05fb1d4f90e671e2d31cac104491f6c179a5edb3bd_640.jpg",
            "type":"photo",
            "previewHeight":99,
            "tags":"italy, sunrise, sky",
            "downloads":162378,
            "user":"12019",
            "favorites":810,
            "imageSize":571235,
            "previewWidth":150,
            "userImageURL":"",
            "previewURL":"https://cdn.pixabay.com/photo/2017/02/19/15/28/italy-2080072_150.jpg"
        },
        {
            "largeImageURL":"https://pixabay.com/get/e83cb6062df0073ed1584d05fb1d4f90e671e2d31cac104491f6c179a5edb3bd_1280.jpg",
            "webformatHeight":349,
            "webformatWidth":640,
            "likes":765,
            "imageWidth":2200,
            "id":1979546,
            "user_id":12019,
            "views":306179,
            "comments":72,
            "pageURL":"https://pixabay.com/en/castelmezzano-italy-village-town-1979546/",
            "imageHeight":1203,
            "webformatURL":"https://pixabay.com/get/e83cb6062df0073ed1584d05fb1d4f90e671e2d31cac104491f6c179a5edb3bd_640.jpg",
            "type":"photo",
            "previewHeight":81,
            "tags":"castelmezzano, italy, village",
            "downloads":50801,
            "user":"12019",
            "favorites":750,
            "imageSize":914644,
            "previewWidth":150,
            "userImageURL":"",
            "previewURL":"https://cdn.pixabay.com/photo/2017/01/14/13/59/castelmezzano-1979546_150.jpg"
        },
        {
            "largeImageURL":"https://pixabay.com/get/ee31b8092af11c22d2524518b7454093e577e4d004b0144593f0c17ba7ebb0_1280.jpg",
            "webformatHeight":363,
            "webformatWidth":640,
            "likes":725,
            "imageWidth":5616,
            "id":749625,
            "user_id":51581,
            "views":204292,
            "comments":89,
            "pageURL":"https://pixabay.com/en/angel-nature-clouds-cloudiness-749625/",
            "imageHeight":3188,
            "webformatURL":"https://pixabay.com/get/ee31b8092af11c22d2524518b7454093e577e4d004b0144593f0c17ba7ebb0_640.jpg",
            "type":"photo",
            "previewHeight":85,
            "tags":"angel, nature, clouds",
            "downloads":41121,
            "user":"Comfreak",
            "favorites":637,
            "imageSize":5131581,
            "previewWidth":150,
            "userImageURL":"https://cdn.pixabay.com/user/2018/10/09/21-54-50-927_250x250.jpg",
            "previewURL":"https://cdn.pixabay.com/photo/2015/05/02/08/02/angel-749625_150.jpg"
        }
    ],
    styleProps: {}
};

it('shallow renders Carousel component without crashing', () => {

    shallow(<Items {...defaultProps}/>);
});