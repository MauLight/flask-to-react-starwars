"""empty message

Revision ID: 47acf261bc05
Revises: 43a02f32969e
Create Date: 2022-11-27 01:53:26.848305

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '47acf261bc05'
down_revision = '43a02f32969e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('favorites',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=250), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=250), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('users')
    op.drop_table('favorites')
    # ### end Alembic commands ###
