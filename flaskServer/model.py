<<<<<<< HEAD
import tensorflow as tf
from tf.keras.applications.vgg19 import VGG19
from tf.keras.preprocessing import image
from tf.keras.applications.vgg19 import preprocess_input
from tf.keras.models import Model
import matplotlib.pyplot as plt
# import numpy as np
import pandas as pd
=======
import tensorflow 
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.mobilenet import preprocess_input

>>>>>>> 37eab0ef3a1837b8a8c759d3109f5297153a6141
import numpy as np
import requests


model = tensorflow.keras.models.load_model('/root/inssa-food/flaskServer/best.h5')

classes = ['갈비찜', '김밥', '떡볶이', '물냉면', '배추김치', '불고기', '비빔밥', '순두부찌개', '잡채', '한과']

# def preprocess_image(img):
#         if (img.shape[0] != 224 or img.shape[1] != 224):
#             img = cv2.resize(img, (224, 224), interpolation=cv2.INTER_NEAREST)
#         img = (img/127.5)
#         img = img - 1
#         img = np.expand_dims(img, axis=0)
#         return img

def prep(imgUrl) :
  img_path = "/root/inssa-food/server/uploads/"+imgUrl
  img = image.load_img(img_path, target_size=(224, 224))
  x = image.img_to_array(img)
  x = np.expand_dims(x, axis=0)
  x = preprocess_input(x)
  # print(x)
  return x



# 모델 불러오기
def modelRun(imgUrl) :
    # imgRes = requests.get(f"http://115.85.182.215:8000{imgUrl}")
<<<<<<< HEAD
    
    model = tf.keras.models.load_model('C:\\Users\\he125\\OneDrive\\바탕 화면\\Dev\\Git\\inssa-food-client\\flaskServer\\foodie_vgg19_1_9075.h5')
=======
>>>>>>> 37eab0ef3a1837b8a8c759d3109f5297153a6141

    print(model.summary())
    
    print('이미지경로잡기 직전')
    # img_path = "/root/inssa-food/server/uploads/"+imgUrl
    
    preprocessed = prep(imgUrl)

    pred = model.predict(preprocessed)

    result = classes[np.argmax(pred)]
    print("file: ", input, "result : ", result)


    ind = classes.index(result) +1

    print("보내주는 index값 : ", ind)

    return ind

    
    # pd.options.display.float_format = '{:.5f}'.format
    # pd.reset_option('display.float_format')
    # img_path ='http://115.85.182.215:8000{imgUrl}'

<<<<<<< HEAD
    # img_path = 'C:\\Users\\he125\\OneDrive\\바탕 화면\\Dev\\Git\\inssa-food-client\\flaskServer\\tpk.jpg'
    img_path ='http://115.85.182.215:8000{imgUrl}'
    img = image.load_img(img_path, target_size=(224, 224))
    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    x = preprocess_input(x)
    features = model.predict(x)
    print(features) 
=======
    
    
    # file = glob.glob(img_path)
    
    # img = cv2.imread(file)
    # pred = model.predict(preprocess_image(img))
    # result = classes[np.argmax(pred)]
    # ind = classes.index(result);
    # print("file: ", file, "result : ", result, "ind : ", ind)
>>>>>>> 37eab0ef3a1837b8a8c759d3109f5297153a6141

    
    # print(features) 
    # print(type(features))
    # tmp = max(features[0])
    # index = list(features[0]).index(tmp)
    # print(index)
    # plt.imshow(features[0,:,:,3]) # 4번째 피쳐맵(특징)을 그려보자. cf. 0부터 시작하기에 4번째임.
<<<<<<< HEAD
    return features[0]
=======

>>>>>>> 37eab0ef3a1837b8a8c759d3109f5297153a6141

