/**
 * Created by 13261 on 2017/9/16.
 */

//���������Ե��ðѾֲ�����Ϊȫ����������ֹȫ�ֱ�����Ⱦ
(function (window) {
    //2.����һ���߶��󣨶�λ���̶�λ�ã�Ĭ��Ҫ�����ƶ���
    //a.��ʼ���ߣ��ŵ�map�У�
    //b.ɾ���ߵķ�������ò����⣩
    //c.�ƶ��ߵķ�������ò����⣩��ֻ�ƶ�һ��λ�ã�

    //2.����һ���߶��󣨶�λ���̶�λ�ã�Ĭ��Ҫ�����ƶ���
    function Snake(width, height, direction) {//1.���  2�����壨I.λ��  II.��ɫ��  3.����
        this.width = width || 20;
        this.height = height || 20;
        //2�����壨I.λ��  II.��ɫ�� ( �����������������������Ԫ��Ϊ����)
        this.body = [
            {top: 2, left: 4, color: "red"},//ͷ
            {top: 2, left: 3, color: "orange"},//����
            {top: 2, left: 2, color: "orange"}//����
        ];
        this.direction = direction || "right";

    }

    //a.��ʼ���ߣ��ŵ�map�У�������3��div��ʼ��һ���ߣ�
    //����һ�����飬��ÿ��Ԫ�ض����������У���������ɾ��
    var arr = [];
    Snake.prototype.init = function (map) {//�ŵ�map��
        //bug: ֻ����һ���ߣ���������֮ǰ��ɾ����ɾ��һ�����飩
        removeSnake(map);
        //(����3��div��ʼ��һ����)������forѭ������body��
        for (var i = 0; i < this.body.length; i++) {
            //����div����body��������Ժ�ֵ
            var newDiv = document.createElement("div");
            //�������ԣ���ߣ�λ�ã����̶���������ɫ����λ��
            newDiv.style.width = this.width + "px";//����λ
            newDiv.style.height = this.height + "px";//����λ
            newDiv.style.position = "absolute";
            //��������Ĳ�ͬ���ò�ͬ��λ�ú���ɫ
            newDiv.style.top = this.body[i].top * this.height + "px";
            newDiv.style.left = this.body[i].left * this.width + "px";
            newDiv.style.background = this.body[i].color;//this�е�body�е�color���Զ�Ӧ���������ɫ

            //����map�С�
            map.appendChild(newDiv);
            //ÿ��div���������һ���֣����������飬����ɾ��
            arr.push(newDiv);

        }
    }


    //b.ɾ���ߵķ���������ò����⣩
    function removeSnake(map) {//��map����ɾ��ָ��Div;
        //I:��map��ɾ��div;  II ��������ɾ��Ԫ��   III: ��map��arr
        //���������е�Ԫ�أ�ɾ��map�е�������
        for (var i = 0; i < arr.length; i++) {
            //I:��map��ɾ��div
            map.removeChild(arr[i]);
            //II:��������ɾ��Ԫ��;
            arr.shift();//ɾ�������еĵ�һ��
            i--;//Ϊ��ɾ�����У����Ա�֤iһֱ��0�����߷������
        }

    }

    //c.�ƶ��ߵķ��������ò����⣩��ֻ�ƶ�һ��λ�ã�
    //���ƶ�ԭ��ɾ�����߻����ߣ�I.������ĺ���ؽ�����Ϊǰ�������   II,ͷ���շ���-1/+1;��
    Snake.prototype.move = function (map, food) {
        //ɾ�����߻�����
        removeSnake(map);
        //(I.������ĺ���ؽ�����Ϊǰ�������  II��ͷ���շ���-1/+1);
        //a.�Ӻ���ǰ�����������ֲ����   b.��ǰ��ĸ�ֵ������  c.���ܵ�һ��
        for (var i = this.body.length - 1; i >= 1; i--) {//a��cԭ��
            //b��ǰ��ĸ�ֵ������
            this.body[i].top = this.body[i - 1].top;
            this.body[i].left = this.body[i - 1].left;
        }

        //II,ͷ���շ���-1/+1;
        //�ж�this.direction�ķ����������leftֵ������������topֵ���
        switch (this.direction) {
            case "right":
                this.body[0].left += 1;
                break;
            case "left":
                this.body[0].left -= 1;
                break;
            case "top":
                this.body[0].top -= 1;
                break;
            case "bottom":
                this.body[0].top += 1;
                break;
        }

        //��ʳ��
        //ͷ�����ʳ��������ȣ�1.��������һ��ʳ��  2.����������һ�����һ���Ĳ�����
        var headx = this.body[0].left * this.width;//top/left����ֵҪ���Կ��
        var heady = this.body[0].top * this.height;//top/left����ֵҪ���Կ��
        var last = this.body[this.body.length - 1];
        //�жϣ�ͷ�����ʳ���������
        if (headx == food.left && heady == food.top) {
            //1.��������һ��ʳ��  2.����������һ�����һ���Ĳ���
            food.init(map);
            //����һ���ؽ�
            var obj = {
                top: last.top,
                left: last.left,
                color: last.color
            };
            this.body.push(obj);

        }
        //ʵ��������ó�ʼ������
        this.body.push(map);

    }
        //�Ѿֲ�������¶��ȫ��
        window.Snake = Snake;//ȫ�ַ�Χ�ڣ���һ�����ֽ���Snake�Ĺ��캯����




})(window);

