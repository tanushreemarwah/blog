class CommentsController < ApplicationController

	def new
		@comment = Comment.new
	end

	def show
		@comment = Comment.find(params[:comment][:parent_id])
	end

	def edit
		@comment = Comment.find(params[:comment][:parent_id])
	end

	def create
		if (params[:comment][:parent_type] == 'Post')
			@parent = Post.find(params[:comment][:parent_id])
		else
			@parent = Comment.find(params[:comment][:parent_id])
		end

		@comment = Comment.create(
				content: params[:comment][:content],
				# user_id: current_user.id,
				parent: @parent
				# or you can do
				# user: current_user
			)

		# UserMailer.new_comment(@comment).deliver_now


	end



	def destroy
		@comment = Comment.find(params[:comment][:parent_id])
		@post = @comment.post
   		@comment.destroy

		redirect_to comments_path
	end
end
