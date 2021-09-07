# 获取正在运行中的ios模拟器的设备id
xcrun simctl list | grep Booted | awk -F '[()]+' '{print $2}'
# 添加媒体问价到ios模拟器
xcrun simctl addmedia $(设备id) $(文件路径)


