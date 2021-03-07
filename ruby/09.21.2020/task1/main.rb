require_relative 'linked_list'

class Main
  ll = LinkedList.new(1)
  ll << 2
  ll << 3
  ll << "hello"
  ll.each { |n| puts n }
  puts
  puts ll[3]
  puts ll[2]
  puts ll[1]
  ll[2]= 10
  puts
  puts ll[4]
  puts
  ll.each { |n| puts n }
  puts
  puts ll.include?(Node.new(6))
end