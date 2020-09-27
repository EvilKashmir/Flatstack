class Node
  attr_accessor :value, :next

  def initialize(value)
    @value = value
    @next = nil
  end

  def to_s
    @value.to_s
  end
end

class LinkedList
  include Enumerable

  attr_reader :head, :tail, :size

  def initialize(value)
    @tail = Node.new(value)
    @head = @tail
    @size = 1
  end

  def <<(value)
    node = Node.new(value)
    @tail.next = node
    @tail = node
    @size += 1
  end

  def empty?
    true if (@size == 0)
  end

  def [](index)
    raise "Empty linkedlist" if empty?
    if (index > size || index < 0)
      raise "Wrong index"
    end
    count = 1
    res = @head
    while count < index
      res = res.next
      count += 1
    end
    res
  end

  def []=(index, value)
  	raise "Empty linkedlist" if empty?
  	if (index > size || index < 0)
      raise "Wrong index"
    end
    node = self[index]
    node.value = value
    return
  end

  def each(&block)
    node = @head
    while node != nil
      yield node.value
      node = node.next
    end
  end
end

ll = LinkedList.new(1)
ll << 2
ll << 3
ll.each { |n| puts n }
puts
puts ll[3]
puts ll[2]
puts ll[1]
ll[2]= 10
puts
puts ll[3]
puts
ll.each { |n| puts n }
puts ll.include?(Node.new(6))