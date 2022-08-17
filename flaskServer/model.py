import tensorflow 
# from tensorflow.keras.applications.vgg19 import VGG19
# from tensorflow.keras.preprocessing import image
# from tensorflow.keras.applications.vgg19 import preprocess_input
# from tensorflow.keras.models import Model
# import matplotlib.pyplot as plt
# import pandas as pd
# import numpy as np
# import requests
# import tensorflow_hub as hub


# 모델 불러오기
def modelRun(imgUrl) :
    # imgRes = requests.get(f"http://115.85.182.215:8000{imgUrl}")
    
    model = tensorflow.keras.models.load_model('/root/inssa-food/flaskServer/foodie_mobilenet_256_128_DO2.h5')
    
    # mobile_net_url = 'https://tfhub.dev/google/tf2-preview/mobilenet_v2/classification/4'
    # model = tensorflow.keras.Sequential([
    # hub.KerasLayer(handle=mobile_net_url, input_shape=(224, 224, 3), trainable=False)
    # ])

    print(model.summary())


    
    # pd.options.display.float_format = '{:.5f}'.format
    # pd.reset_option('display.float_format')

    # # img_path = 'C:\\Users\\he125\\OneDrive\\바탕 화면\\Dev\\Git\\inssa-food-client\\flaskServer\\tpk.jpg'
    # # img_path ='http://115.85.182.215:8000{imgUrl}'
    # img_path = imgUrl
    # img = image.load_img(img_path, target_size=(224, 224))
    # x = image.img_to_array(img)
    # x = np.expand_dims(x, axis=0)
    # x = preprocess_input(x)
    # features = model.predict(x)
    # print(features) 

    # print(type(features))
    # print(features)
    # # plt.imshow(features[0,:,:,3]) # 4번째 피쳐맵(특징)을 그려보자. cf. 0부터 시작하기에 4번째임.
    # return features[0]

modelRun('/root/inssa-food/flaskServer/img_image21660548025317.jpg')
