# test reader connection in ruby

require 'socket'

s = TCPSocket.open("speedwayr-11-a5-1d.local", 14150)

while line = s.gets
    puts line.chop
end

s.close