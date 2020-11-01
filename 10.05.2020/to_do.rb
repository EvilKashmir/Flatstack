require "pg"

class ToDo
  attr_reader :id, :title

  @@conn = PG.connect(dbname: "sinatra", host: "localhost", user: "postgress",
                      password: "postgres")

  def initialize(params)
    @id = params['id']
    @title = params['title']
  end

  def save
    @@conn.exec("INSERT INTO todo_app (title) VALUES ('#{@title}') RETURNING id")
  end

  def delete
    @@conn.exec("DELETE FROM todo_app WHERE id=#{@id}")
  end

  def update(params)
    @@conn.exec("UPDATE todo_app SET title='#{params['title']}' WHERE id=#{@id}")
  end

  def self.all
    @@conn.exec("SELECT * FROM todo_app")
  end

  def self.where(params)
    @@conn.exec("SELECT * FROM todo_app WHERE id = #{params['id']}")
  end
end
