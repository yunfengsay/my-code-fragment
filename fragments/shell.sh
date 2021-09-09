# 获取正在运行中的ios模拟器的设备id
xcrun simctl list | grep Booted | awk -F '[()]+' '{print $2}'
# 添加媒体问价到ios模拟器
xcrun simctl addmedia $(设备id) $(文件路径)

# mac 截图, -c 保存在粘贴板中
screencapture -i /tmp/test.png

# 截取屏幕上的图片并发送给模拟器
screencapture -i /tmp/screencapture.png && xcrun simctl addmedia $(xcrun simctl list | grep Booted | awk -F '[()]+' '{print $2}') /tmp/screencapture.png

