require_relative 'node'

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
    true if @size.zero?
  end

  def [](index)
    raise "Empty linkedlist" if empty?
    raise "Wrong index" if index > size || index.negative?

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
    raise "Wrong index" if index > size || index.negative?

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
