 /**
 * Created by 13261 on 2017/9/16.
 */
//���������Ե��ðѾֲ���������Ϊȫ�ֱ�������ֹȫ�ֱ�����Ⱦ
(function(window){
  //1.����һ��ʳ�����


    //1.����һ��ʳ����󣨶�λ�����λ�ã�ҳ����ֻ��һ����
    //����һ��ʳ������캯������¶��ȫ��
    function Food (width,height,top,left,background){//1.���  2.λ��  3.��ɫ
        //���ݵĲ�������Ϊʵ�������е�һ�����ԣ�Ĭ�ϵ��Զ������ʼֵ��
        this.width = width || 20;
        this.height = height  || 20;
        this.top = top || 0;
        this.left = left || 0;
        this.background = background || "green";


    }

    //a.��ʼ��ʳ��ŵ�map�У��������ﴴ��DOM���󣬸���ʵ����ʳ�������������ݳ�ʼ��ʳ�
    var newDiv = null;
    Food.prototype.init = function(map){//�����õ�DOM������뵽������map���У�
        //bug��ҳ���в�Ӧ���ж��ʳ�ÿ��ֻ����һ��
        removeFood(map);//��ɾ����Ȼ��������һ���µ�
        //����DOM���󡣰����ԣ����λ�á�����map;
        newDiv = document.createElement("div");
        newDiv.style.width = this.width+"px";//����λ
        newDiv.style.height = this.height+"px";//����λ
        newDiv.style.background = this.background;//����ɫ������λ
        //�Ӷ�λ��Բ��
        newDiv.style.position = "absolute";
        newDiv.style.borderRadius = "50%";
        //���λ��
        this.top = parseInt(Math.random()*(map.offsetHeight-this.height)/this.height)*this.height;
        this.left = parseInt(Math.random()*(map.offsetWidth-this.width)/this.width)*this.width;
        newDiv.style.top = this.top + "px";
        newDiv.style.left = this.left + "px";
        //���
        map.appendChild(newDiv);
    }

    //b.ɾ��ʳ��ķ�������ò����⣩
    function removeFood(map){
        // ��map�а�newDivɾ������newDiv�Ǿֲ����������������������������Χ�ڵ�ȫ�ֱ�����
        // consol.log(newDiv);//��һ����null
        if(newDiv != null){
            map.removeChild(newDiv);
        }
    }

    //�Ѿֲ�������¶��ȫ��
    window.Food = Food;//ȫ�ַ�Χ�ڣ���һ�����ֽ���Food�Ĺ��캯��


})(window);
